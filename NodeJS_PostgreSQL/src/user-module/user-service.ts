import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(): any {
        var arr = [0, 1]
        var dtRs = {
            code: 0,
            data: arr
        }
        return dtRs;
    }
}
