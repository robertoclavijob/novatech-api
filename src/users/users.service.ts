import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { DeletedUserDto } from './dto/deleted-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ user_id: id });
  }

  create(user: CreateUserDto): Promise<User> {
    const newUser = Object.assign(new User(), user);
    return this.userRepository.save(newUser);
  }

  async delete(id: number): Promise<DeletedUserDto> {
    let existingUser = await this.userRepository.findOneBy({ user_id: id });

    if (!existingUser) {
      throw new NotFoundException(`The user with id [${id}] does not exist`);
    }

    let deletedUser = new DeletedUserDto();
    deletedUser.id = id;
    deletedUser.message = `The user with id [${id}] was deleted successfully`;

    try {
      await this.userRepository.delete(id);
      return new Promise((resolve, reject) => {
        resolve(deletedUser);
      });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
