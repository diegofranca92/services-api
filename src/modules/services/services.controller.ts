import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { yupCreateServiceInput } from '@yup/services';
import { ServiceCreateInput } from './dto/service';
import { ServiceOfService } from './services.service';

// Aquie é feito a validação do dado que sera recebido no front e passa ele para o servico
// que depois manda pro repository criar no banco
@Controller()
export class ServiceController {
  constructor(private readonly serviceOfService: ServiceOfService) {}

  @Post('/service')
  async createService(@Body() input: ServiceCreateInput) {
    const isValidInput = yupCreateServiceInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Seu input está invalido');

    return this.serviceOfService.createService(input);
  }
  @Get('/services')
  async getServices() {
    return this.serviceOfService.getServices();
  }
}
