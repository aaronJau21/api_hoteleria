import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { PrismaModule } from "./shared/prisma/prisma.module";
import { LibModule } from "./lib/lib.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/rooms/category/category.module';
import { RoomsModule } from './modules/rooms/rooms.module';

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
    CategoryModule,
    RoomsModule,
  ],
})
export class AppModule {}
