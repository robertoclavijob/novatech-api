import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint()
export class GenderValidator implements ValidatorConstraintInterface{
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        if(value === 'male' || value === 'female' || value === 'other'){
            return true;
        }
        return false;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return `The gender [${validationArguments.value}] is not valid`;
    }
}