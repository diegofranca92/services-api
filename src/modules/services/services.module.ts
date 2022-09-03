import { Module } from '@nestjs/common';
import { ServiceRepository } from './repositories';
import { ServiceController } from './services.controller';
import { ServiceOfService } from './services.service';

@Module({
  controllers: [ServiceController],
  providers: [ServiceOfService, ServiceRepository],
})
export class ServiceModule {}
