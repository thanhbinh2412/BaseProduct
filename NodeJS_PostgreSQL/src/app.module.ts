import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './module/user-module/user-module.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModuleModule } from './module/category-module/category-module.module';
import { LoggerMiddleware } from './middlewares/logger.middlewares';
import { UserControllerController } from './module/user-module/user-controller/user-controller.controller';

@Module({
  imports: [UserModuleModule, CategoryModuleModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserControllerController)
  }
}
