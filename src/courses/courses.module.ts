import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { CoursesResolver } from './courses.resolver';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesResolver, PrismaService],
  exports: [CoursesService],
})
export class CoursesModule {}
