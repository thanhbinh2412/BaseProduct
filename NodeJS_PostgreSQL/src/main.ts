import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log("Server on: http://localhost:3000");
    var isStatus: boolean = getConnection().isConnected
    if (isStatus) {
      console.log("DB connect succes");
    } else {
      console.log("DB error");
      
    }
  });
}
bootstrap();
