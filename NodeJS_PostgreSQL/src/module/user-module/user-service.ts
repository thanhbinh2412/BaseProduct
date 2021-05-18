import { Injectable } from '@nestjs/common';
import { ApiResultCode, ApiUrls, DefaultMessage } from '../../common/CommonData';
import { UserReqDto } from '../../models/UserModel.dto';
import { CommonFuntion } from '../../common/CommonFunc';
import { getConnection, getManager } from 'typeorm';
import { CommonDb } from 'src/common/CommonDb';

@Injectable()
export class UserService {
  async getUser(dtReq: any) {
    const query = `SELECT id, name, password, refreshtoken FROM public."user";`;
    var dt = await CommonDb.GetData(query);
    return dt;
  }

  async registerUser(req: any){
    const query = `INSERT INTO public."user"(name, password)
    VALUES ('${req.name}', '${req.pass}');`;
    var message: string;
    var code: number;
    console.log(query);
    
    var dt = await CommonDb.SaveData(query);
    if(dt == ApiResultCode.Success){
      message = DefaultMessage.msgUpdateSuccess
      code = ApiResultCode.Success
    }else{
      message = DefaultMessage.msgUpdateError
      code = ApiResultCode.Error
    }

    return {
      code: code,
      message: message,
      data: []
    };
  }

  async login(dtReq: any) {
    const query = `
                select * from public."user" as lg
                where lg."name" = 'binh'
                and lg."password" = '1234'`;
    var dt = await CommonDb.GetData(query);
    return dt;
  }
}
