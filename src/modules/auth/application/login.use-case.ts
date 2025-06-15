import { Inject, NotFoundException } from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { ILoginRepository } from "../domain/login.IRepository";
import { PasswordService } from "src/lib/password/password.service";

export class LoginUseCase {
  constructor(
    @Inject("LoginRepository")
    private readonly loginRepository: ILoginRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.loginRepository.findUserByEmail(email);

    if (!user) {
      throw new NotFoundException("Usuario no encontrado");
    }

    const fb = await this.passwordService.comparePasswords(
      password,
      user.password,
    );

    if (!fb) {
      throw new NotFoundException("Usuario no encontrado");
    }

    return {
      user: {
        email: user.email,
        name: user.nombre,
      },
    };
  }
}
