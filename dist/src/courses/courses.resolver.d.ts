import { CoursesService } from './courses.service';
export declare class CoursesResolver {
    private readonly service;
    constructor(service: CoursesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }[]>;
    coursesPage(skip: number, take: number, search?: string): Promise<{
        data: {
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
        }[];
        pagination: {
            skip: number;
            take: number;
            total: number;
        };
    }>;
    createCourse(code: string, title: string, description?: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
