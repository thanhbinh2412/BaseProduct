import { Injectable } from '@nestjs/common';
import { ApiUrls, DefaultMessage } from '../common/CommonData'
import{UserReqDto} from '../models/UserModel.dto'
import { CommonFuntion } from '../common/CommonFunc'

@Injectable()
export class UserService {
    getUser(dtReq: UserReqDto): any {
        var arr = ApiUrls.apiLogin
        var dtRs = {
            code: 0,
            message: DefaultMessage.msgGetDataErrorNotFound,
            data: dtReq.TOKEN
        }
        return dtRs;
    }
}