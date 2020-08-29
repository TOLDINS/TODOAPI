import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
@Injectable()
export class TaxiService{
  getInfo():string{
    return 'This is taxi service';
  }
}
