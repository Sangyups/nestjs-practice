import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
