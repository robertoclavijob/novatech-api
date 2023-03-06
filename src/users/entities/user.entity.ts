import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { GenderEnum } from "../enums/gender.enum";
import { UserStatusEnum } from "../enums/user-status.enum";

@Entity()
export class User{
    @PrimaryGeneratedColumn({
        unsigned: true
    })
    user_id: number;

    @Column()
    name: string;

    @Column()
    gender: GenderEnum;

    @Column()
    status: UserStatusEnum;

    @Column()
    email: string;
}