import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ICategoryRepository } from "../../domain/category.irepository";
import { CategoryEntity } from "../../domain/category.entity";
import { PrismaService } from "src/shared/prisma/prisma.service";
import { IResultAllCategory } from "../interfaces/result-all.interface";

@Injectable()
export class PrismaCategoryRepository implements ICategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CategoryEntity): Promise<CategoryEntity> {
    const existingCategory = await this.prismaService.categoryRooms.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingCategory) {
      throw new BadRequestException(`La categoria ${data.name} ya existe`);
    }

    const category = await this.prismaService.categoryRooms.create({
      data,
    });

    return category;
  }
  async all(): Promise<IResultAllCategory[]> {
    const categories = await this.prismaService.categoryRooms.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        status: true,
      },
    });
    return categories;
  }

  async updateStatus(id: number): Promise<CategoryEntity> {
    const category = await this.prismaService.categoryRooms.findUnique({
      where: {
        id,
      },
    });
    if (!category) {
      throw new NotFoundException(`La categoria con id ${id} no existe`);
    }

    const updateCategory = await this.prismaService.categoryRooms.update({
      where: {
        id,
      },
      data: {
        status: !category.status,
      },
    });

    return updateCategory;
  }

  async getCategoryById(id: number): Promise<CategoryEntity> {
    const category = await this.prismaService.categoryRooms.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new NotFoundException(`La categoria con id ${id} no existe`);
    }

    return category;
  }

  async updateCategory(id: number, name: string): Promise<CategoryEntity> {
    const category = await this.prismaService.categoryRooms.update({
      where: {
        id,
      },
      data: {
        name: name,
      },
    });

    return category;
  }
  async deleteCategory(id: number): Promise<void> {
    await this.prismaService.categoryRooms.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
