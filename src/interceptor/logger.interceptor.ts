import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggerInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        this.logger.log(LoggerInterceptor.name);
        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('User-Agent')
        const { ip, method, path } = request;
        this.logger.debug(`Before: IP= ${ip} - method= ${method} - path= ${path} - User-Agent= ${userAgent}`);
        const now = Date.now();

        return next.handle().pipe(
            tap(() => {
                this.logger.debug(`After: during response time ${Date.now() - now} ms`)
            })
        )
    }
}