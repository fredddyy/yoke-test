import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UsersRepository } from './users.repository';
import { hash } from 'bcrypt';
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './models/Users';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async createUser(createUserRequest: CreateUserRequest): Promise<any> {
    return this.userRepository.insertOne({
      ...createUserRequest,
      password: await hash(createUserRequest.password, 10),
    });
  }

  private buildResponse(user: User): UserResponse {
    return {
      _id: user._id.toHexString(),
      email: user.email,
    };
  }
}
