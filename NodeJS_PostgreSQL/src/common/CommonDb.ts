import { getConnection } from 'typeorm';
import { ApiResultCode } from './CommonData';

export class CommonDb {
  public static async GetData(query: string) {
    var DtRs = [];
    const db = getConnection().query(query);
    await db.then((dt) => {
      dt.forEach((item) => {
        DtRs.push(item);
      });
    })
    return DtRs;
  }

  public static async SaveData(query: string){
    const db = getConnection().query(query);
    var status: number;
    await db.then(()=>{
      status = ApiResultCode.Success;
    }).catch(()=>{
      status = ApiResultCode.Error;
    });
    return status;
  }
}
