import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from '../service/auth.service'
import { LoginUserDto } from '../model/login.dto'
import { LocalAuthGuard } from '../guards/local-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto)
  }
}
