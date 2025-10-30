import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
