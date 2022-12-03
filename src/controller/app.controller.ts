import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() userId: string): string {
    return this.appService.getHello();
  }

}
