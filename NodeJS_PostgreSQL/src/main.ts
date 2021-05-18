import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log("Server on: http://localhost:3000");
    var isStatus: boolean = getConnection().isConnected
    if (isStatus) {
      console.log("DB connect success");
    } else {
      console.log("DB error");
      
    }
  });
}
bootstrap();

// list sv: netstat -ano|findstr "PID :3000"
// kill process: taskkill /pid 18264 /f

