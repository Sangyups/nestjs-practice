import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDto } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserRequestDto) {
    console.log(body);
  }
}
