import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";
import { CategoryEntity } from "../domain/category.entity";

export class CreateCategoryRoomUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(name: string): Promise<CategoryEntity> {
    const category = new CategoryEntity();
    category.name = name;
    category.status = true;
    await this.categoryRepository.create(category);

    return category;
  }
}
