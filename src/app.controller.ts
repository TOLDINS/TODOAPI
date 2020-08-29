import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('start')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id')
  get(@Param('id')id:'string'):String{
    return id;
  }
}


