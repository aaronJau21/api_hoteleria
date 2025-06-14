import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/application/commands/create-user.use-case";
import { CreateUserDto } from "../../dtos/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly createUser: CreateUserUseCase) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.createUser.execute(
      dto.nombre,
      dto.lastName,
      dto.email,
      dto.password,
    );
  }
}
