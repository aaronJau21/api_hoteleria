import { Module } from "@nestjs/common";
import { CategoryModule } from "./category/category.module";
import { PrismaModule } from "src/shared/prisma/prisma.module";

@Module({
  imports: [CategoryModule, PrismaModule],
})
export class RoomsModule {}
