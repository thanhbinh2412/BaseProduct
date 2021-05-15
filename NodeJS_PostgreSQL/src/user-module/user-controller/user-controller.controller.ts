import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user-service';
import{UserReqDto} from '../../models/UserModel.dto'

@Controller('user')
export class UserControllerController {
    constructor(private readonly service: UserService) { }
    

    @Get('get')
    getUser() {
        return "get user"
    }

    @Post('post')
    async postUser(@Body() req: UserReqDto) {
        return this.service.getUser(req)
    }
}