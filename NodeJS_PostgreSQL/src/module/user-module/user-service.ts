import { Injectable } from '@nestjs/common';
import { ApiUrls, DefaultMessage } from '../../common/CommonData';
import { UserReqDto } from '../../models/UserModel.dto';
import { CommonFuntion } from '../../common/CommonFunc';
import { getConnection } from 'typeorm';
import { CommonDb } from 'src/common/CommonDb';

@Injectable()
export class UserService {
  async getUser(dtReq: UserReqDto) {
    const query = `SELECT id, user_name, password FROM public."user";`;
    var dt = [];
    getConnection()
      .query(query)
        .then((res) => {
          dt.push(res)
      });

    var arr = ApiUrls.apiLogin;
    var dtRs = {
      code: 0,
      message: DefaultMessage.msgGetDataErrorNotFound,
      data: dt,
    };
    return dtRs;
  }
}
