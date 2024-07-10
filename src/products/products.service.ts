import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async searchByName(
    name: string,
    options: { page: number; limit: number },
  ): Promise<[Product[], number]> {
    const { page, limit } = options;
    const [result, total] = await this.productRepository.findAndCount({
      where: [
        { nameEn: Like(`%${name}%`) },
        { nameTh: Like(`%${name}%`) },
        { nameEs: Like(`%${name}%`) },
      ],
      take: limit,
      skip: (page - 1) * limit,
    });
    return [result, total];
  }

  findAll() {
    return this.productRepository.find();
  }
}
