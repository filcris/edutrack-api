import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Enrollment } from './entities/enrollment.entity';
import { EnrollmentsService } from './enrollments.service';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(private readonly service: EnrollmentsService) {}

  @Query(() => [Enrollment], { name: 'enrollments' })
  list() {
    return this.service.list();
  }

  @Mutation(() => Enrollment)
  enroll(
    @Args('studentId') studentId: string,
    @Args('courseId') courseId: string,
  ) {
    return this.service.enroll({ studentId, courseId });
  }
}
