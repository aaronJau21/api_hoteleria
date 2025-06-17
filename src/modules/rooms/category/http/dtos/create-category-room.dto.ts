import { IsString } from "class-validator";

export class CreateCategoryRoomDto {
  @IsString()
  name: string;
}
