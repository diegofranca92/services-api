import {
  Injectable,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { ServiceRepository } from './repositories';
import { ServiceCreateInput } from './dto/service';

@Injectable()
export class ServiceOfService {
  constructor(private readonly serviceRepository: ServiceRepository) {}
  async createService(input: ServiceCreateInput): Promise<ServiceCreateInput> {
    const foundedServiceById = await this.serviceRepository.findByUnique({
      name: input.name,
    });

    if (foundedServiceById) {
      throw new ConflictException('Já existe um Serviço com esse nome');
    }

    try {
      return this.serviceRepository.create(input);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async getServices(): Promise<any> {
    try {
      return this.serviceRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
