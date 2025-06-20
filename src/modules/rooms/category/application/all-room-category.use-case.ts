import { Inject } from "@nestjs/common";
import { ICategoryRepository } from "../domain/category.irepository";
import { IResultAllCategory } from "../infraestructure/interfaces/result-all.interface";

export class AllCategoryRoomUseCase {
  constructor(
    @Inject("CategoryRepository")
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async execute(): Promise<IResultAllCategory[]> {
    const categories = await this.categoryRepository.all();
    return categories;
  }
}
