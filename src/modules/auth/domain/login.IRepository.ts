import { User } from "generated/prisma";

export interface ILoginRepository {
  findUserByEmail(email: string): Promise<User | null>;
}
