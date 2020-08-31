import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { ToDoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [ToDoController],
  providers: [TodoService],
})
export class TodoModule {}
