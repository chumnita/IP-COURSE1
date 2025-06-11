import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // Defines HTTP routes
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}
//Injects the TaskService into the controller.
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.findOne(+id);
  }

@Post()
create(@Body() taskData: CreateTaskDto): Promise<Task> {
  return this.tasksService.create(taskData);
}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Task>): Promise<Task | null> {
    return this.tasksService.update(+id, updateData);
  }

@Delete('clear')
async clearAll(): Promise<void> {
  await this.tasksService.clearAll();
}

@Delete(':id')
remove(@Param('id') id: string): Promise<void> {
  return this.tasksService.remove(+id);
}


}
