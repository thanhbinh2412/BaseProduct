import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user-service';
import * as bcrypt from 'bcrypt';
import { CommonDb } from 'src/common/CommonDb';

@Controller('user')
export class UserControllerController {
  constructor(private readonly service: UserService) {}

  @Get('get')
  getUser() {
    return 'get user';
  }

  @Post('danh-sach')
  async postUser(@Body() req: any) {
    var dt = await this.service.getUser(req);
    return dt;
  }

  @Post('register')
  async register(@Body() req: any){
    const pass = await bcrypt.hash(req.PASSWORD, 10);

    return await this.service.registerUser({
      name: req.NAME,
      pass: pass
    });
  }

  @Post('login')
  async login(@Body() req: any) {
    var dt = await this.service.getUser(req);
    return dt;
  }
}
