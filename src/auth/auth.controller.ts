import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard'; // นำเข้า LocalAuthGuard ที่นี่

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // ใช้งาน LocalAuthGuard ที่นี่
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
