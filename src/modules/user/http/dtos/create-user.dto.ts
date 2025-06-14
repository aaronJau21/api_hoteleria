import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
