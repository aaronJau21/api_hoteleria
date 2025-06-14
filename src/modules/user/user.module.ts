import { Module } from "@nestjs/common";
import { UserController } from "./http/controller/user/user.controller";
import { PrismaUserRepository } from "./infraestructure/prisma/user.repository";
import { CreateUserUseCase } from "./application/commands/create-user.use-case";
import { PrismaModule } from "src/shared/prisma/prisma.module";
import { LibModule } from "src/lib/lib.module";

@Module({
  providers: [
    { provide: "UserRepository", useClass: PrismaUserRepository },
    // UseCase
    CreateUserUseCase,
  ],
  controllers: [UserController],
  imports: [PrismaModule, LibModule],
})
export class UserModule {}
