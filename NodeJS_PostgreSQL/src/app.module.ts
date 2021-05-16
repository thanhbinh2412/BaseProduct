import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './module/user-module/user-module.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModuleModule } from './module/category-module/category-module.module';

@Module({
  imports: [UserModuleModule, CategoryModuleModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
