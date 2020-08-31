import { Controller, Get, Post, Param, Body, Delete, Put } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { CreateDto, UpdateDto } from "./dto";
import { TodoService } from "../services/todo.service";



@Controller('rest/todo')
export class ToDoController{
   constructor(private readonly todoService:TodoService){

   }
    @Get()
    getAllTodo():Promise<Todo[]>{
        return this.todoService.findAll();

    }
    @Get(':id')
    getOneAction(@Param('id') id:string):Promise<Todo>{
        return this.todoService.findOne(id);

    }
    @Post()
    saveAction(@Body() todo:Todo):Promise<Todo>{
        
        return this.todoService.addTodo(todo);
    }
    @Put()
    updateAction(@Body() todo:UpdateDto):UpdateDto{
        console.log(todo);
        return todo;
    }
    @Delete(':id')
     deleteAction(@Param('id') id:string):Promise<void> {
        return this.todoService.removeTodo(id);
    }
    
}