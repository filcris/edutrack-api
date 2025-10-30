import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsResolver } from './enrollments.resolver';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, EnrollmentsResolver, PrismaService],
})
export class EnrollmentsModule {}
