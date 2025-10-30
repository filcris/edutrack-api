import { StudentsService } from './students.service';
export declare class StudentsResolver {
    private readonly service;
    constructor(service: StudentsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    studentsPage(skip: number, take: number, search?: string): Promise<{
        data: {
            email: string;
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        pagination: {
            skip: number;
            take: number;
            total: number;
        };
    }>;
    createStudent(email: string, name: string): import(".prisma/client").Prisma.Prisma__StudentClient<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
