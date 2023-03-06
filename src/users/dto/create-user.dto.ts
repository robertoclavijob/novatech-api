import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { GenderEnum } from '../enums/gender.enum';
import { UserStatusEnum } from '../enums/user-status.enum';
import { GenderValidator } from '../validators/gender.validator';
import { UserStatusValidator } from '../validators/user-status.validator';

export class CreateUserDto {
  @ApiProperty({type: 'string'})
  @IsNotEmpty()
  name: string;

  @ApiProperty({type: 'string'})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({type: 'enum', enum: GenderEnum})
  @IsNotEmpty()
  @Validate(GenderValidator)
  gender: GenderEnum;

  @ApiProperty({type: 'enum', enum: UserStatusEnum, default: UserStatusEnum.ACTIVE})
  @IsNotEmpty()
  @Validate(UserStatusValidator)
  status: UserStatusEnum;
}
