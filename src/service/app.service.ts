import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly requestService: RequestService){}

  getHello(): string {
    this.logger.log(AppService.name);
    const userId = this.requestService.getUserId();
    return `Hello World! your userID is: ${userId}`;
  }
}
