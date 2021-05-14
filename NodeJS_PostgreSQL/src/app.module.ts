import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { CategoryModuleModule } from './category-module/category-module.module';

@Module({
  imports: [UserModuleModule, CategoryModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
