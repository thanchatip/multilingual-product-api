import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nameTh: string;

  @IsNotEmpty()
  @IsString()
  descriptionTh: string;

  @IsNotEmpty()
  @IsString()
  nameEn: string;

  @IsNotEmpty()
  @IsString()
  descriptionEn: string;

  @IsNotEmpty()
  @IsString()
  nameEs: string;

  @IsNotEmpty()
  @IsString()
  descriptionEs: string;
}
