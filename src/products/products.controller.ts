import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('search')
  async search(
    @Query('name') name: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ data: Product[]; totalRecords: number }> {
    const [data, totalRecords] = await this.productsService.searchByName(name, {
      page,
      limit,
    });
    return { data, totalRecords };
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
