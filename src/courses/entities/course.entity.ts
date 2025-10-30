import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field(() => ID)
  id!: string;

  @Field()
  code!: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;
}
