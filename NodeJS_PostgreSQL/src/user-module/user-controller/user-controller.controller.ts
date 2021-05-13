import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { UserService } from '../user-service';

@Controller('user')
export class UserControllerController {
    constructor(private readonly service: UserService) { }
    

    @Get('get')
    getUser() {
        return this.service.getUser()
    }

    @Post('post')
    postUser() {
        return this.service.getUser()
    }
}
