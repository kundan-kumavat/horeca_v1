import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Create user
  create(data: any) {
    return this.prisma.user.create({ data });
  }

  // Get all users
  findAll() {
    return this.prisma.user.findMany({ include: { branch: true } });
  }

  // Get one user by ID
  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id }, include: { branch: true } });
  }

  // Update user
  update(id: string, data: any) {
    return this.prisma.user.update({ where: { id }, data });
  }

  // Delete user
  delete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
