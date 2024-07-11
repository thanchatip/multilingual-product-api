import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class SearchProductsDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  limit?: string;
}
