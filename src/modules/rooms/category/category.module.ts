import { Delete, Module } from "@nestjs/common";
import { PrismaModule } from "src/shared/prisma/prisma.module";
import { PrismaCategoryRepository } from "./infraestructure/prisma/category.repository";
import { CreateCategoryRoomUseCase } from "./application/create-room-category.use-case";
import { CategoryRoomController } from "./http/controller/category-room.controller";
import { AllCategoryRoomUseCase } from "./application/all-room-category.use-case";
import { UpdateRoomCategoryUseCase } from "./application/update-room-category.use-case";
import { GetRoomCategoryIdUseCase } from "./application/get-room-category-id.use-case";
import { UpdateRoomUseCase } from "./application/update-room.use-case";
import { DeleteRoomCategoryUseCase } from "./application/delete-room-category.use-case";

@Module({
  providers: [
    { provide: "CategoryRepository", useClass: PrismaCategoryRepository },
    // UseCase
    CreateCategoryRoomUseCase,
    AllCategoryRoomUseCase,
    UpdateRoomCategoryUseCase,
    GetRoomCategoryIdUseCase,
    UpdateRoomUseCase,
    DeleteRoomCategoryUseCase,
  ],
  controllers: [CategoryRoomController],
  imports: [PrismaModule],
})
export class CategoryModule {}
