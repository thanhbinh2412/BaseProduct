import { getConnection } from 'typeorm';

export class CommonDb {
  public static async GetData(query: string) {
    const db = getConnection().query(query);

    var DtRs = [];

    db.then((dt) => {
      console.log(dt);
      dt.forEach((item) => {
        console.log(item);
        DtRs.push(item);
      });
      return DtRs;
    }).finally(() => {});
  }
}
