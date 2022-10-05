import {
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { CategoryRepository } from './repositories';
import { CategoryCreateInput } from './dto/category';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async createCategory(
    input: CategoryCreateInput,
  ): Promise<CategoryCreateInput> {
    const foundedCategoryById = await this.categoryRepository.findByUnique({
      name: input.name,
    });

    if (foundedCategoryById) {
      throw new ConflictException('Já existe uma Categoria com esse nome');
    }

    try {
      return this.categoryRepository.create(input);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async getCategories(): Promise<any> {
    try {
      return this.categoryRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
