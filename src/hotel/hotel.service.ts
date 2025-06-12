import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { CreateHotelInput } from './dto/create-hotel.input';
import { UpdateHotelInput } from './dto/update-hotel.input';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepo: Repository<Hotel>,
  ) {}

  async create(data: CreateHotelInput): Promise<Hotel> {
    const hotel = this.hotelRepo.create(data);
    return await this.hotelRepo.save(hotel);
  }

  async findAll(): Promise<Hotel[]> {
    return await this.hotelRepo.find();
  }

async findOne(id: number): Promise<Hotel> {
  const hotel = await this.hotelRepo.findOne({ where: { id } });
  if (!hotel) throw new NotFoundException(`Hotel ID ${id} not found`);
  return hotel;
}

async update(data: UpdateHotelInput): Promise<Hotel> {
  const exists = await this.hotelRepo.findOne({ where: { id: data.id } });
  if (!exists) throw new NotFoundException(`Hotel ID ${data.id} not found`);
  await this.hotelRepo.update(data.id, data);
  return this.findOne(data.id);
}


  async remove(id: number): Promise<boolean> {
    const result = await this.hotelRepo.delete(id);
    return result.affected !== 0; // ✅ works in all versions
  }
}
