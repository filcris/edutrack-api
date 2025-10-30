import { PrismaService } from '../common/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCourseDto): import(".prisma/client").Prisma.Prisma__CourseClient<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }[]>;
    findAllPagedWithTotal(q: ListQueryDto): Promise<{
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
    findOne(id: string): Promise<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }>;
    update(id: string, dto: UpdateCourseDto): import(".prisma/client").Prisma.Prisma__CourseClient<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<{
        description: string | null;
        title: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
