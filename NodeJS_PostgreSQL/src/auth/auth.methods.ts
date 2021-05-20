import * as token from 'jsonwebtoken';
import { promisify } from 'util';

const sign = promisify(token.sign).bind(token);
const verify = promisify(token.verify).bind(token);

export const genToken = async (
  payload: any,
  secretSignature: string,
  tokenLife: string,
) => {
  var rs: string;
  try {
    return await sign(payload, secretSignature, {
      algorithm: 'HS256',
      expiresIn: tokenLife,
    });
  } catch (error) {
    console.log(`Error in generate access token:  + ${error}`);
    return null;
  }
};

export const verifyToken = async (token: string, secretKey: string) => {
  try {
    return await verify(token, secretKey);
  } catch (error) {
    console.log(`Error in verify access token:  + ${error}`);
    return null;
  }
};
