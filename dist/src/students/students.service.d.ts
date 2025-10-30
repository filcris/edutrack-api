import { PrismaService } from '../common/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findAllPagedWithTotal(q: ListQueryDto): Promise<{
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
    findOne(id: string): Promise<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateStudentDto): import(".prisma/client").Prisma.Prisma__StudentClient<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<{
        email: string;
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
