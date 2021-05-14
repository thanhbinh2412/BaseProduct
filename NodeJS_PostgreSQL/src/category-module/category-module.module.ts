import { Module } from '@nestjs/common';
import { CategoryControllerController } from './category-controller/category-controller.controller';
import { CategoryService } from './category-service';

@Module({
  controllers: [CategoryControllerController],
  providers: [CategoryService]
})
export class CategoryModuleModule {}
