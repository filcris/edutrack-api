import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id!: string;

  @Field()
  email!: string;

  @Field()
  name!: string;
}
