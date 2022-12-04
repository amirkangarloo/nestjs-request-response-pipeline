import { Controller, Get, Param } from '@nestjs/common';
import { FreezePipe } from '../pipe';
import { AppService } from '../service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param('userId', FreezePipe) userId: string): string {
    return this.appService.getHello();
  }

}
