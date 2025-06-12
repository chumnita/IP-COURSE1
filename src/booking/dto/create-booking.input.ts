import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  start_date: string;

  @Field()
  end_date: string;

  @Field(() => Int)
  hotel_id: number;

  @Field()
  is_checked_in: boolean;

  @Field(() => Float)
  price: number;
}
