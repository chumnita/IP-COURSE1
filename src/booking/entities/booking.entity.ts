import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Booking {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  start_date: string;

  @Field()
  @Column()
  end_date: string;

  @Field(() => Int)
  @Column()
  hotel_id: number;

  @Field()
  @Column()
  is_checked_in: boolean;

  @Field(() => Float)
  @Column()
  price: number;
}
