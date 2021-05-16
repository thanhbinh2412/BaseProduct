import { Module } from '@nestjs/common';
import { UserService } from './user-service';
import { UserControllerController } from './user-controller/user-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserService],
  imports: [TypeOrmModule],
  controllers: [UserControllerController],
})
export class UserModuleModule {}
