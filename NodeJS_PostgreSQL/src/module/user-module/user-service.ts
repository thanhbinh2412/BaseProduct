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
      .then((data) => {
        // console.log(data);
        data.forEach((item) => {
          dt.push(item);
        });
        // console.log('--------');
        // console.log(dt);
      })
      .finally(() => {
        console.log(dt);
        var dtRs = {
          code: 0,
          message: DefaultMessage.msgGetDataErrorNotFound,
          data: dt,
        };
        console.log('2');
        console.log(dtRs);

        return dtRs;
      });

    console.log('1');
  }
}
