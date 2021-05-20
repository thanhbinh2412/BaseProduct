import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from 'src/auth/auth.methods';
import { ApiResultCode, DefaultMessage } from 'src/common/CommonData';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    const accessTokenFromHeader = req.headers['authorization'].substr(7);

    if (!accessTokenFromHeader) {
      res.status(400).send({
        code: ApiResultCode.Error,
        message: DefaultMessage.msgUnAuthorize,
      });
    }

    const accessTokenSecret =
      'Access_Token_Secret_#$%_ExpressJS_Authentication';

    const verified = await verifyToken(
      accessTokenFromHeader,
      accessTokenSecret,
    );

    if (!verified) {
      return res.status(401).send({
        code: ApiResultCode.Error,
        message: 'Bạn không có quyền truy cập vào tính năng này!',
      });
    }

    req.body.USER = verified.username;
    next();
  }
}
