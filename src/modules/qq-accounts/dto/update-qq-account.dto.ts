import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateQQAccountDto {
  @IsString()
  @IsOptional()
  qqNumber?: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsString()
  @IsOptional()
  description?: string;
} 