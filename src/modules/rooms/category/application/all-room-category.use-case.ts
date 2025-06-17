import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";
import { CategoryEntity } from "../domain/category.entity";

export class AllCategoryRoomUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.all();
    return categories;
  }
}
