import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCourseDto) {
    return this.prisma.course.create({ data: dto });
  }

  findAll() {
    return this.prisma.course.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findAllPagedWithTotal(q: ListQueryDto) {
    const where = q.search
      ? {
          OR: [
            { code: { contains: q.search, mode: 'insensitive' as const } },
            { title: { contains: q.search, mode: 'insensitive' as const } },
            { description: { contains: q.search, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.course.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: q.skip,
        take: q.take,
      }),
      this.prisma.course.count({ where }),
    ]);

    return { data, pagination: { skip: q.skip, take: q.take, total } };
  }

  async findOne(id: string) {
    const c = await this.prisma.course.findUnique({ where: { id } });
    if (!c) throw new NotFoundException('Course not found');
    return c;
  }

  update(id: string, dto: UpdateCourseDto) {
    return this.prisma.course.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}
