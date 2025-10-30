
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class LoginResponse {
  @Field() access_token!: string;
}

@ObjectType()
class Me {
  @Field() email!: string;
  @Field() role!: string;
}

@Resolver()
export class AuthResolver {
  constructor(private auth: AuthService) {}

  @Mutation(() => Me)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('role', { nullable: true, defaultValue: 'user' }) role: 'admin'|'user',
  ) {
    const u = await this.auth.register(email, password, role);
    return { email: u.email, role: u.role };
  }

  @Mutation(() => LoginResponse)
  login(@Args('email') email: string, @Args('password') password: string) {
    return this.auth.login(email, password);
  }

  @Query(() => Me)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: any) {
    return { email: user.email, role: user.role };
  }
}
