import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepo: Repository<Booking>,
  ) {}

  async create(data: CreateBookingInput): Promise<Booking> {
    const booking = this.bookingRepo.create(data);
    return await this.bookingRepo.save(booking);
  }

  async findAll(): Promise<Booking[]> {
    return await this.bookingRepo.find();
  }

  async findOne(id: number): Promise<Booking> {
    const booking = await this.bookingRepo.findOne({ where: { id } });
    if (!booking) throw new NotFoundException(`Booking ID ${id} not found`);
    return booking;
  }

  async update(data: UpdateBookingInput): Promise<Booking> {
    const exists = await this.bookingRepo.findOne({ where: { id: data.id } });
    if (!exists) throw new NotFoundException(`Booking ID ${data.id} not found`);
    await this.bookingRepo.update(data.id, data);
    return this.findOne(data.id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.bookingRepo.delete(id);
    return result.affected !== 0;
  }

  async findByDateRange(start: string, end: string): Promise<Booking[]> {
    const all = await this.bookingRepo.find();
    return all.filter(b => {
      const date = new Date(b.start_date);
      return date >= new Date(start) && date <= new Date(end);
    });
  }

  async checkIn(id: number): Promise<Booking> {
    const booking = await this.findOne(id);
    booking.is_checked_in = true;
    return this.bookingRepo.save(booking);
  }
}
