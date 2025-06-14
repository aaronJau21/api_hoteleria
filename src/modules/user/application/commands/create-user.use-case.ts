import { Inject } from "@nestjs/common";
import { IUserRepository } from "../../domain/user.irepository";
import { UserEntity } from "../../domain/user.entity";
import { PasswordService } from "src/lib/password/password.service";

export class CreateUserUseCase {
  constructor(
    @Inject("UserRepository") private readonly userRepository: IUserRepository,
    private readonly hash: PasswordService,
  ) {}

  async execute(
    nombre: string,
    lastName: string,
    email: string,
    password: string,
  ): Promise<UserEntity> {
    const hash = await this.hash.hashPassword(password);
    const user = new UserEntity();
    user.nombre = nombre;
    user.lastName = lastName;
    user.email = email;
    user.password = hash;

    await this.userRepository.create(user);

    return user;
  }
}
