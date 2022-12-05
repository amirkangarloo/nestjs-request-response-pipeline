import { Controller, Get, InternalServerErrorException, Param } from '@nestjs/common';
import { MePipe } from '../pipe';
import { AppService } from '../service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param('userId', MePipe) userId: string): string {
    return this.appService.getHello();
  }

  @Get('/error')
  internalError(): Error{
    throw new InternalServerErrorException()
  }

}
