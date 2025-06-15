import { Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/prisma/prisma.module";
import { PrismaLoginRepository } from "./infraestructure/prisma/login.repository";
import { LibModule } from "src/lib/lib.module";
import { LoginUseCase } from "./application/login.use-case";
import { AuthController } from "./http/controller/auth.controller";

@Module({
  imports: [PrismaModule, LibModule],
  providers: [
    { provide: "LoginRepository", useClass: PrismaLoginRepository },
    // UseCase
    LoginUseCase,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
