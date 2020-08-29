import { Controller, Get, Post, Param, Body, Delete, Put } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { CreateDto, UpdateDto } from "./dto";


@Controller('rest/todo')
export class ToDoController{
    constructor(){

    }
    @Get()
    getAllAction():string{
        return 'Hello? its all action';

    }
    @Get(':id')
    getOneAction(@Param('id') id:string):string{
        return `Hello, its one action by id:${id}`;

    }
    @Post()
    saveAction(@Body() todo:CreateDto):CreateDto{
        console.log(todo)
        return todo;
    }
    @Put()
    updateAction(@Body() todo:UpdateDto):UpdateDto{
        console.log(todo);
        return todo;
    }
    @Delete(':id')
     deleteAction(@Param('id') id:string):string {
        return `Sucsess deleting by id:${id}`
    }
    
}