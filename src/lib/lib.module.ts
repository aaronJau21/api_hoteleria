import { Module } from "@nestjs/common";
import { PasswordService } from "./password/password.service";
import { JsonWebTokenService } from "./json-web-token/json-web-token.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [PasswordService, JsonWebTokenService],
  exports: [PasswordService, JsonWebTokenService],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: "1h" },
    }),
  ],
})
export class LibModule {}
