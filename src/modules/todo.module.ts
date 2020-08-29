import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { ToDoController } from './controllers/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [ToDoController],
  providers: [],
})
export class TodoModule {}
