import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentsResolver } from './students.resolver';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, StudentsResolver, PrismaService],
  exports: [StudentsService],
})
export class StudentsModule {}
