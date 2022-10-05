import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { yupCreateCategoryInput } from '@yup/services';
import { CategoryCreateInput } from './dto/category';
import { CategoryService } from './categories.service';

// Aquie é feito a validação do dado que sera recebido no front e passa ele para o servico
// que depois manda pro repository criar no banco
@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/category')
  async createCategory(@Body() input: CategoryCreateInput) {
    const isValidInput = yupCreateCategoryInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Seu input está invalido');

    return this.categoryService.createCategory(input);
  }
  @Get('/category')
  async getCategories() {
    return this.categoryService.getCategories();
  }
}
