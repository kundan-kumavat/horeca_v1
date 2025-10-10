import { Module } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

import { PrismaService } from 'prisma/prisma.service';
import { UserController } from 'src/controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService],
})
export class UserModule {}
