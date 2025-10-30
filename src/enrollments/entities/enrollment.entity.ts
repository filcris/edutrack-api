import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Student } from '../../students/entities/student.entity';
import { Course } from '../../courses/entities/course.entity';

@ObjectType()
export class Enrollment {
  @Field(() => ID)
  id!: string;

  @Field(() => Student)
  student!: Student;

  @Field(() => Course)
  course!: Course;
}
