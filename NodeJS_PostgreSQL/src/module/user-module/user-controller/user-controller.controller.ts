import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user-service';
import { UserReqDto } from '../../../models/UserModel.dto';
import { CommonDb } from 'src/common/CommonDb';

@Controller('user')
export class UserControllerController {
  constructor(private readonly service: UserService) {}

  @Get('get')
  getUser() {
    return 'get user';
  }

  @Post('post')
  async postUser(@Body() req: UserReqDto) {
    console.log('3');

    var dt = await this.service.getUser(req);
    console.log('4');

    console.log(dt);

    return dt;
  }
}
