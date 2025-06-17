import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCategoryRoomUseCase } from "../../application/create-room-category.use-case";
import { CreateCategoryRoomDto } from "../dtos/create-category-room.dto";
import { AllCategoryRoomUseCase } from "../../application/all-room-category.use-case";

@Controller("category-room")
export class CategoryRoomController {
  constructor(
    private readonly createCategoryRoomUseCase: CreateCategoryRoomUseCase,
    private readonly allCategoryRoomUseCase: AllCategoryRoomUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateCategoryRoomDto) {
    return await this.createCategoryRoomUseCase.execute(dto.name);
  }

  @Get()
  async all() {
    return await this.allCategoryRoomUseCase.execute();
  }
}
