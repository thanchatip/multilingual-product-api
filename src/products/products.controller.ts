import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './entities/product.entity';
import { SearchProductsDto } from './dto/search-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('search')
  async search(
    @Query(ValidationPipe) query: SearchProductsDto,
  ): Promise<{ data: Product[]; totalRecords: number }> {
    const { name, page, limit } = query;

    let pageNumber = page ? parseInt(page) : 1;
    let limitNumber = limit ? parseInt(limit) : 10;

    const [data, totalRecords] = await this.productsService.searchByName(name, {
      page: pageNumber,
      limit: limitNumber,
    });

    return { data, totalRecords };
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
