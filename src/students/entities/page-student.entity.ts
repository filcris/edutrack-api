import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Student } from './student.entity';

@ObjectType()
class PageInfo {
  @Field(() => Int) skip!: number;
  @Field(() => Int) take!: number;
  @Field(() => Int) total!: number;
}

@ObjectType()
export class StudentPage {
  @Field(() => [Student]) data!: Student[];
  @Field(() => PageInfo) pagination!: PageInfo;
}
