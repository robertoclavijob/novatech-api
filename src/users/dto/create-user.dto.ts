import { IsEmail, IsInt, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { GenderValidator } from '../validators/gender.validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Validate(GenderValidator)
  gender: string;

  @IsNotEmpty()
  status: string;
}
