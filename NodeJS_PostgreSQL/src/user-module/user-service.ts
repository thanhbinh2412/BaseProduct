import { Injectable } from '@nestjs/common';
import { ApiUrls, DefaultMessage } from '../common/CommonData'
import { CommonFuntion } from '../common/CommonFunc'

@Injectable()
export class UserService {
    getUser(): any {
        var arr = ApiUrls.apiLogin
        var dtRs = {
            code: 0,
            message: DefaultMessage.msgGetDataErrorNotFound,
            data: CommonFuntion.getDate(3)
        }
        return dtRs;
    }
}
