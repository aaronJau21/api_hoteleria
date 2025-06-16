import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JsonWebTokenService {
  constructor(private jwtService: JwtService) {}

  async generateToken(
    nombre: string,
    lastName: string,
    email: string,
  ): Promise<string> {
    const payload = {
      nombre,
      lastName,
      email,
    };
    return await this.jwtService.signAsync(payload);
  }
}
