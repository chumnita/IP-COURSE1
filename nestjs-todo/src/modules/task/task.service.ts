import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
// Handles business logic (create, update, delete, find)
@Injectable()
export class TaskService {
  findOne: any;
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>
    //interact with the database (save, find, delete, etc.).
  ) {}

  create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  async update(id: number, data: Partial<Task>): Promise<Task> {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException('Task not found');
    Object.assign(task, data);
    return this.taskRepo.save(task);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
  async clearAll(): Promise<void> {
  await this.taskRepo.clear(); // deletes all rows
}

}
