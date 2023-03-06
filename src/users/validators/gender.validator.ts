import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { GenderEnum } from "../enums/gender.enum";

@ValidatorConstraint()
export class GenderValidator implements ValidatorConstraintInterface{
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        if(value === GenderEnum.MALE || value === GenderEnum.FEMALE || value === GenderEnum.OTHER){
            return true;
        }
        return false;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return `The gender [${validationArguments.value}] is not valid`;
    }
}