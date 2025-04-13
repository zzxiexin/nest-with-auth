import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateQQAccountDto {
  @IsString()
  @IsNotEmpty()
  qqNumber: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  description?: string;
} 