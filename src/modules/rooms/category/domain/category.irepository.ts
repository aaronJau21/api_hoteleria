import { IResultAllCategory } from "../infraestructure/interfaces/result-all.interface";
import { CategoryEntity } from "./category.entity";

export interface ICategoryRepository {
  create(category: CategoryEntity): Promise<CategoryEntity>;
  all(): Promise<IResultAllCategory[]>;
  updateStatus(id: number): Promise<CategoryEntity>;
  getCategoryById(id: number): Promise<CategoryEntity>;
  updateCategory(id: number, name: string): Promise<CategoryEntity>;
  deleteCategory(id: number): Promise<void>;
}
