import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Resolver(() => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation(() => Booking)
  bookHotel(@Args('createBookingInput') createBookingInput: CreateBookingInput) {
    return this.bookingService.create(createBookingInput);
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll() {
    return this.bookingService.findAll();
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookingService.findOne(id);
  }

  @Mutation(() => Booking)
  updateBooking(@Args('updateBookingInput') updateBookingInput: UpdateBookingInput) {
    return this.bookingService.update(updateBookingInput);
  }

  @Mutation(() => Boolean)
  cancelBooking(@Args('id', { type: () => Int }) id: number) {
    return this.bookingService.remove(id);
  }

  @Mutation(() => Booking)
  checkIn(@Args('id', { type: () => Int }) id: number) {
    return this.bookingService.checkIn(id);
  }

  @Query(() => [Booking])
  getBookingsByDate(
    @Args('start') start: string,
    @Args('end') end: string
  ) {
    return this.bookingService.findByDateRange(start, end);
  }
}
