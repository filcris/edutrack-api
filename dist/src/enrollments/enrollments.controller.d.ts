import { EnrollmentsService } from './enrollments.service';
import { EnrollDto } from './dto/enroll.dto';
export declare class EnrollmentsController {
    private readonly service;
    constructor(service: EnrollmentsService);
    enroll(dto: EnrollDto): import(".prisma/client").Prisma.Prisma__EnrollmentClient<{
        student: {
            email: string;
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        course: {
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        studentId: string;
        courseId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    list(): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
            email: string;
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
        course: {
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        studentId: string;
        courseId: string;
    })[]>;
}
