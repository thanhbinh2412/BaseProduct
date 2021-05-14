import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category-service';

describe('CategoryService', () => {
  let provider: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    provider = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
