import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { StudentPage } from './entities/page-student.entity';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly service: StudentsService) {}

  @Query(() => [Student], { name: 'students' })
  findAll() {
    return this.service.findAll();
  }

  @Query(() => StudentPage, { name: 'studentsPage' })
  studentsPage(
    @Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
    @Args('take', { type: () => Int, defaultValue: 20 }) take: number,
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ) {
    return this.service.findAllPagedWithTotal({ skip, take, search });
  }

  @Mutation(() => Student)
  createStudent(
    @Args('email') email: string,
    @Args('name') name: string,
  ) {
    return this.service.create({ email, name });
  }
}
