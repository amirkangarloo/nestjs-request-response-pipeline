import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './controller';
import { AuthMiddleware } from './middleware';
import { AppService, RequestService } from './service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({path: '/', method: RequestMethod.GET})
  }
}
