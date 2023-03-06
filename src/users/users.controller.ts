import { BadRequestException, Body, Controller, Delete, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DeletedUserDto } from './dto/deleted-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<User>{
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    if (Object.keys(user).length === 0) {
      throw new BadRequestException('The user cannot be empty');
    }
    return this.userService.create(user);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<DeletedUserDto> {
    return this.userService.delete(id);
  }
}
