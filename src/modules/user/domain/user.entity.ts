export class UserEntity {
  public readonly id: number;
  public nombre: string;
  public lastName: string;
  public email: string;
  public password: string;

  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date | null;
}
