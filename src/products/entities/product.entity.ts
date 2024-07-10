import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nameTh: string;

  @Column()
  descriptionTh: string;

  @Column()
  nameEn: string;

  @Column()
  descriptionEn: string;

  @Column()
  nameEs: string;

  @Column()
  descriptionEs: string;
}
