import { Injectable } from '@nestjs/common';
import { ApiResultCode, ApiUrls, DefaultMessage } from '../../common/CommonData';
import { UserReqDto } from '../../models/UserModel.dto';
import { CommonFuntion } from '../../common/CommonFunc';
import { getConnection, getManager } from 'typeorm';
import { CommonDb } from 'src/common/CommonDb';
import * as bcrypt from 'bcrypt';
import { genToken } from 'src/auth/auth.methods';
import { generate } from 'rand-token'

@Injectable()
export class UserService {
  async getUser(dtReq: any) {
    const query = `SELECT id, name, password, "refreshToken" FROM public."user";`;
    var dt = await CommonDb.GetData(query);
    return dt;
  }

  async registerUser(req: any) {
    const query = `INSERT INTO public."user"(name, password)
    VALUES ('${req.name}', '${req.pass}');`;
    var message: string;
    var code: number;
    console.log(query);

    var dt = await CommonDb.SaveData(query);
    if (dt == ApiResultCode.Success) {
      message = DefaultMessage.msgUpdateSuccess
      code = ApiResultCode.Success
    } else {
      message = DefaultMessage.msgUpdateError
      code = ApiResultCode.Error
    }

    return {
      code: code,
      message: message,
      data: []
    };
  }

  async login(req: any) {

    var message: string;
    var code: number;
    var Rs: any = {
      id: Number,
      name: String,
      accessToken: String,
      refreshToken: String
    };

    const queryUser = `
                select * from public."user" as lg
                where lg."name" = '${req.name}'`;

    var isUser = await CommonDb.GetData(queryUser);
    if (isUser.length == 0) {
      message = "Tài khoản không hợp lệ";
      code = ApiResultCode.Error
    } else {
      // khởi tạo token
      const accessTokenLife = "10m";
      const accessTokenSecret = "Access_Token_Secret_#$%_ExpressJS_Authentication";
      const dataForAccessToken = {
        username: isUser[0].id,
      };

      const isValidatePass = bcrypt.compareSync(req.pass, isUser[0].password);
      if (isValidatePass) {
        const accessToken = await genToken(dataForAccessToken, accessTokenSecret, accessTokenLife);
        if (!accessToken) {
          message = "Đăng nhập không thành công";
          code = ApiResultCode.Error;
        }
        let refreshToken = generate(100);
        if (!isUser[0].refreshToken) {
          const updateRefreshToken = `
                UPDATE public."user" AS a
                SET "refreshToken"= '${refreshToken}'
                WHERE a.id = ${isUser[0].id};`;
          await CommonDb.SaveData(updateRefreshToken)
          Rs.refreshToken = refreshToken
        } else {
          Rs.refreshToken = isUser[0].refreshToken
        }
        message = "Đăng nhập thành công";
        code = ApiResultCode.Success;
        Rs.id = isUser[0].id
        Rs.name = isUser[0].name
        Rs.accessToken = accessToken;
      } else {
        message = "Mật khẩu không đúng";
        code = ApiResultCode.Warning;
      }
    }


    return {
      code: code,
      message: message,
      data: Rs
    };
  }
}
