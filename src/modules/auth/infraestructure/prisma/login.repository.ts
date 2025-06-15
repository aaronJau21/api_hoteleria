import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { ILoginRepository } from "../../domain/login.IRepository";
import { User } from "generated/prisma";

@Injectable()
export class PrismaLoginRepository implements ILoginRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
