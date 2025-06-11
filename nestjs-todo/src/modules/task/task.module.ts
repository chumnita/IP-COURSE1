import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { User } from '../user/user.entity';
// Registers the controller, service, and repo with NestJS
@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}