import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/user.irepository";
import { UserEntity } from "../../domain/user.entity";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
