import { Injectable } from "@nestjs/common";
import { ICategoryRepository } from "../../domain/category.irepository";
import { CategoryEntity } from "../../domain/category.entity";
import { PrismaService } from "src/shared/prisma/prisma.service";

@Injectable()
export class PrismaCategoryRepository implements ICategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CategoryEntity): Promise<CategoryEntity> {
    const category = await this.prismaService.categoryRooms.create({
      data,
    });

    return category;
  }
  async all(): Promise<CategoryEntity[]> {
    const categories = await this.prismaService.categoryRooms.findMany({
      where: {
        deletedAt: null,
      },
    });
    return categories;
  }
}
