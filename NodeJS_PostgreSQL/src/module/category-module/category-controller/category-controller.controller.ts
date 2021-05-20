import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from '../category-service';

@Controller('category')
export class CategoryControllerController {
  constructor(private readonly service: CategoryService) {}

  @Post('get')
  getUser() {
    return 'get user';
  }
}
