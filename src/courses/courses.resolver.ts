import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Course } from './entities/course.entity';
import { CoursesService } from './courses.service';
import { CoursePage } from './entities/page-course.entity';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private readonly service: CoursesService) {}

  @Query(() => [Course], { name: 'courses' })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => CoursePage, { name: 'coursesPage' })
  coursesPage(
    @Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
    @Args('take', { type: () => Int, defaultValue: 20 }) take: number,
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ) {
    return this.service.findAllPagedWithTotal({ skip, take, search });
  }

  @Mutation(() => Course)
  createCourse(
    @Args('code') code: string,
    @Args('title') title: string,
    @Args('description', { nullable: true }) description?: string,
  ) {
    return this.service.create({ code, title, description });
  }
}
