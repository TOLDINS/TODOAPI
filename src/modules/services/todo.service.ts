import {Todo} from '../entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class TodoService{
    constructor(
        @InjectRepository(Todo)
        private todoRepository:Repository<Todo>
    ){}

   async addTodo(todo:Todo):Promise<Todo>{
       return await this.todoRepository.create(todo);
   }
   async findAll():Promise<Todo[]>{
       return  await this.todoRepository.find();
   }
   async findOne(id:string):Promise<Todo>{
       return await this.todoRepository.findOne(id);
   }
   async removeTodo(id:string):Promise<void>{
       await this.todoRepository.delete(id);
   }



}