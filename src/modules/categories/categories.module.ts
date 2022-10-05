import { Module } from '@nestjs/common';
import { CategoryRepository } from './repositories';
import { CategoryController } from './categories.controller';
import { CategoryService } from './categories.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
