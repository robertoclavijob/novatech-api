import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserStatusEnum } from '../enums/user-status.enum';

@ValidatorConstraint()
export class UserStatusValidator implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    if (value === UserStatusEnum.ACTIVE || value === UserStatusEnum.INACTIVE) {
      return true;
    }
    return false;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `The status [${validationArguments.value}] is not valid`;
  }
}
