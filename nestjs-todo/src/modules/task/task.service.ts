import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>
  ) {}

  // ✅ Create new task
  create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create(dto);
    return this.taskRepo.save(task);
  }

  // ✅ Get all tasks
  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  // ✅ Get one task by ID
  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException(`Task with id '${id}' not found`);
    return task;
  }

  // ✅ Update task by ID
  async update(id: number, data: Partial<Task>): Promise<Task> {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException(`Task with id '${id}' not found`);
    Object.assign(task, data);
    return this.taskRepo.save(task);
  }

  // ✅ Delete task by ID
  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }

  // ✅ Clear all tasks
  async clearAll(): Promise<void> {
    await this.taskRepo.clear();
  }
}
