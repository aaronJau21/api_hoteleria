import { IsString, IsOptional } from "class-validator";

export class UpdateCategoryRoomDto {
  @IsString()
  @IsOptional()
  name: string;
}
