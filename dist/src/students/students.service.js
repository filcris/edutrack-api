"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let StudentsService = class StudentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.student.create({ data: dto });
    }
    findAll() {
        return this.prisma.student.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async findAllPagedWithTotal(q) {
        const where = q.search
            ? {
                OR: [
                    { name: { contains: q.search, mode: 'insensitive' } },
                    { email: { contains: q.search, mode: 'insensitive' } },
                ],
            }
            : undefined;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.student.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: q.skip,
                take: q.take,
            }),
            this.prisma.student.count({ where }),
        ]);
        return { data, pagination: { skip: q.skip, take: q.take, total } };
    }
    async findOne(id) {
        const s = await this.prisma.student.findUnique({ where: { id } });
        if (!s)
            throw new common_1.NotFoundException('Student not found');
        return s;
    }
    update(id, dto) {
        return this.prisma.student.update({ where: { id }, data: dto });
    }
    remove(id) {
        return this.prisma.student.delete({ where: { id } });
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map