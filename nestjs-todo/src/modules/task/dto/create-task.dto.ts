import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
//validate request body data before it reaches service.

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  userId: number;
}
