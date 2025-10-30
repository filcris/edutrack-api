import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateStudentDto) {
    return this.prisma.student.create({ data: dto });
  }

  findAll() {
    return this.prisma.student.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findAllPagedWithTotal(q: ListQueryDto) {
    const where = q.search
      ? {
          OR: [
            { name: { contains: q.search, mode: 'insensitive' as const } },
            { email: { contains: q.search, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.student.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: q.skip,
        take: q.take,
      }),
      this.prisma.student.count({ where }),
    ]);

    return { data, pagination: { skip: q.skip, take: q.take, total } };
  }

  async findOne(id: string) {
    const s = await this.prisma.student.findUnique({ where: { id } });
    if (!s) throw new NotFoundException('Student not found');
    return s;
  }

  update(id: string, dto: UpdateStudentDto) {
    return this.prisma.student.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.student.delete({ where: { id } });
  }
}
