import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    const saltRounds = parseInt(process.env.SALT_ROUNDS as string);
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
