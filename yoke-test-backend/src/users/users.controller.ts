import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserRequest: CreateUserRequest): Promise<any> {
    return this.usersService.createUser(createUserRequest);
  }
}
