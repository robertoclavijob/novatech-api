import { GenderEnum } from "../enums/gender.enum";
import { UserStatusEnum } from "../enums/user-status.enum";

export class User{
    user_id: number;
    name: string;
    gender: GenderEnum;
    status: UserStatusEnum;
    email: string;
}