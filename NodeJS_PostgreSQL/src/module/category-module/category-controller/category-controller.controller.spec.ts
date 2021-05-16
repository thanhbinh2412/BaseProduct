import { Test, TestingModule } from '@nestjs/testing';
import { CategoryControllerController } from './category-controller.controller';

describe('CategoryControllerController', () => {
  let controller: CategoryControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryControllerController],
    }).compile();

    controller = module.get<CategoryControllerController>(CategoryControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
