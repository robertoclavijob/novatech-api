import { BadRequestException, Body, Controller, Delete, Get, InternalServerErrorException, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [{ name: 'Roberto' }];
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return { name: 'Roberto' };
  }

  @Post()
  create(@Body() user: any) {
    if (Object.keys(user).length === 0) {
      throw new BadRequestException('The user cannot be empty');
    }
    return user;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return `User with id ${id} was successfully deleted`;
  }
}
