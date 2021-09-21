import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  find(@Param('id') id): Promise<User> {
    return this.usersService.find(id);
  }

  @Post()
  create(@Body() user: UserDTO): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id, @Body() user: UserDTO): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.usersService.delete(id);
  }
}

//TODO: add validation
