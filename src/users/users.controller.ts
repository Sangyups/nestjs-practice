import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserRequestDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserRequestDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserRequestDto) {
    return this.userService.create(body.email, body.password);
  }

  @Get()
  findAllUsersByEmail(@Query('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get('/:userId')
  findUserById(
    @Param(
      'userId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    userId: number,
  ) {
    return this.userService.findOneById(userId);
  }

  @Patch('/:userId')
  updateUser(
    @Param(
      'userId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    userId: number,
    @Body() body: UpdateUserRequestDto,
  ) {
    return this.userService.update(userId, body);
  }

  @Delete('/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(
    @Param(
      'userId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    userId: number,
  ) {
    return this.userService.remove(userId);
  }
}
