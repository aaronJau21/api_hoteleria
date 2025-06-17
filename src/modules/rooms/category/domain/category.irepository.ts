import { CategoryEntity } from "./category.entity";

export interface ICategoryRepository {
  create(category: CategoryEntity): Promise<CategoryEntity>;
  all(): Promise<CategoryEntity[]>;
}
