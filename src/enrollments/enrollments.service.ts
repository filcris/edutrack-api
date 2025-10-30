import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { EnrollDto } from './dto/enroll.dto';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  enroll(dto: EnrollDto) {
    return this.prisma.enrollment.create({
      data: { studentId: dto.studentId, courseId: dto.courseId },
      include: { student: true, course: true },
    });
  }

  list() {
    return this.prisma.enrollment.findMany({ include: { student: true, course: true } });
  }
}
