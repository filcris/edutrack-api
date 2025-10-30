import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Course } from './course.entity';

@ObjectType()
class PageInfoCourse {
  @Field(() => Int) skip!: number;
  @Field(() => Int) take!: number;
  @Field(() => Int) total!: number;
}

@ObjectType()
export class CoursePage {
  @Field(() => [Course]) data!: Course[];
  @Field(() => PageInfoCourse) pagination!: PageInfoCourse;
}
