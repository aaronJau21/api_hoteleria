import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateCategoryRoomUseCase } from "../../application/create-room-category.use-case";
import { CreateCategoryRoomDto } from "../dtos/create-category-room.dto";
import { AllCategoryRoomUseCase } from "../../application/all-room-category.use-case";
import { UpdateRoomCategoryUseCase } from "../../application/update-room-category.use-case";
import { GetRoomCategoryIdUseCase } from "../../application/get-room-category-id.use-case";
import { UpdateRoomUseCase } from "../../application/update-room.use-case";
import { UpdateCategoryRoomDto } from "../dtos/update-category-room.dto";
import { DeleteRoomCategoryUseCase } from "../../application/delete-room-category.use-case";

@Controller("category-room")
export class CategoryRoomController {
  constructor(
    private readonly createCategoryRoomUseCase: CreateCategoryRoomUseCase,
    private readonly allCategoryRoomUseCase: AllCategoryRoomUseCase,
    private readonly updateRoomCategoryUseCase: UpdateRoomCategoryUseCase,
    private readonly getRoomCategoryIdUseCase: GetRoomCategoryIdUseCase,
    private readonly updateRoomUseCase: UpdateRoomUseCase,
    private readonly deleteRoomCategoryUseCase: DeleteRoomCategoryUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateCategoryRoomDto) {
    return await this.createCategoryRoomUseCase.execute(dto.name);
  }

  @Get()
  async all() {
    return await this.allCategoryRoomUseCase.execute();
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    return await this.getRoomCategoryIdUseCase.execute(+id);
  }

  @Patch("status/:id")
  async updateStatus(@Param("id") id: string) {
    return await this.updateRoomCategoryUseCase.execute(+id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() data: UpdateCategoryRoomDto) {
    return await this.updateRoomUseCase.execute(+id, data.name);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.deleteRoomCategoryUseCase.execute(+id);
  }
}
