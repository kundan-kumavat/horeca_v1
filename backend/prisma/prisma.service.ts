import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // helper for transactional usage
  async transactional<T>(fn: (prisma: PrismaClient) => Promise<T>) {
    return this.$transaction(async (tx) => fn(tx));
  }
}
