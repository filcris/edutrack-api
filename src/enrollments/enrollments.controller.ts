import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollDto } from './dto/enroll.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('enrollments')
@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly service: EnrollmentsService) {}

  @Post()
  enroll(@Body() dto: EnrollDto) {
    return this.service.enroll(dto);
  }

  @Get()
  list() {
    return this.service.list();
  }
}
