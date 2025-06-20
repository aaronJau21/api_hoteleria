import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";

export class DeleteRoomCategoryUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: number) {
    await this.categoryRepository.deleteCategory(id);
  }
}
