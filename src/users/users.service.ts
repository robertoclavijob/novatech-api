import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DeletedUserDto } from './dto/deleted-user.dto';
import { User } from './entities/user.entity';
import { GenderEnum } from './enums/gender.enum';
import { UserStatusEnum } from './enums/user-status.enum';

@Injectable()
export class UsersService {
    findAll():Promise<User[]>{
        let user = new User();
        user.name = 'Roberto';
        user.status = UserStatusEnum.ACTIVE;
        user.gender = GenderEnum.MALE;
        user.user_id = 1;
        user.email = 'claviro85@gmail.com';
    
        return new Promise((resolve, reject) => {
          resolve([user]);
        });
    }

    findOne(id: number):Promise<User>{
        let user = new User();
        user.name = 'Roberto';
        user.status = UserStatusEnum.ACTIVE;
        user.gender = GenderEnum.MALE;
        user.user_id = 1;
        user.email = 'claviro85@gmail.com';

        return new Promise((resolve, reject)=>{
            return resolve(user);
        })
    }

    create(user: CreateUserDto): Promise<User>{
        const newUser = new User();
        return new Promise((resolve, reject)=>{
            resolve(newUser);
        })
    }

    delete(id: number): Promise<DeletedUserDto>{
        let deletedUser = new DeletedUserDto();
        deletedUser.id = 1;
        deletedUser.message = `The user with id [${id}] was deleted successfully`;

        return new Promise((resolve, reject)=>{
            resolve(deletedUser);
        })
    }
}
