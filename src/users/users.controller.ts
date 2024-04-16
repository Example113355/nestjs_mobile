import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: number){
    console.log(id)
    return this.usersService.getUserById(id);
  }

  @Post()
  addUser(@Body() user: { id: number; name: string; age: number; }) {
    console.log(user)
    return this.usersService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number){
    return this.usersService.deleteUser(id);
  }
}
