export abstract class BaseEntity {
  public readonly id: number;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt?: Date | null;
}
