
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty() @IsEmail() email!: string;
  @ApiProperty() @IsString() @MinLength(3) password!: string;
  @ApiProperty({ required: false, enum: ['admin','user'] })
  @IsOptional() @IsString() role?: 'admin' | 'user';
}
