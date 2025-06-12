import { CreateHotelInput } from './create-hotel.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateHotelInput extends PartialType(CreateHotelInput) {
  @Field(() => Int)
  id: number;
}
