
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({ select: { id: true, email: true, role: true } });
  }

  async findOne(id: string) {
    const u = await this.prisma.user.findUnique({ where: { id }, select: { id: true, email: true, role: true } });
    if (!u) throw new NotFoundException('User not found');
    return u;
  }
}
