import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";
import { CategoryEntity } from "../domain/category.entity";

export class UpdateRoomCategoryUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.updateStatus(id);
    return category;
  }
}
