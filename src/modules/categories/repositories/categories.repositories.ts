import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@modules/prisma';

// metodos de operações no 'banco de dados' que serão disponibilizados pelo Repository
@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.service.findMany();
  }

  findByUnique(input: Prisma.ServiceWhereUniqueInput) {
    return this.prismaService.service.findUnique({
      where: input,
    });
  }

  create(input: Prisma.ServiceCreateInput) {
    return this.prismaService.service.create({
      data: input,
    });
  }

  update(input: Prisma.ServiceUpdateInput, id: string) {
    return this.prismaService.service.update({
      data: input,
      where: {
        id,
      },
    });
  }

  delete(id: string) {
    return this.prismaService.service.delete({
      where: {
        id,
      },
    });
  }
}
