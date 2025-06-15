import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { PrismaModule } from "./shared/prisma/prisma.module";
import { LibModule } from "./lib/lib.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    LibModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    AuthModule,
  ],
})
export class AppModule {}
