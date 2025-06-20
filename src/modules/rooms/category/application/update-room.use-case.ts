import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";

export class UpdateRoomUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: number, name: string) {
    const category = await this.categoryRepository.updateCategory(id, name);
    return category;
  }
}
