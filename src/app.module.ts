import { MiddlewareConsumer, Module, NestModule, RequestMethod, Scope } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './controller';
import { AuthGuard } from './guard';
import { LoggerInterceptor } from './interceptor';
import { AuthMiddleware } from './middleware';
import { AppService, RequestService } from './service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    RequestService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggerInterceptor
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({path: '/', method: RequestMethod.GET})
  }
}
