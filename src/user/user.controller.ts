import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
// import { LoginUserDto } from '../auth/dto/login.dto'
// import { AuthService } from 'src/auth/auth.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    // private readonly authService: AuthService,
  ) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  // @Post('login')
  // login(@Body() loginUserDto: LoginUserDto) {
  //   return this.authService.login(loginUserDto)
  // }
}
