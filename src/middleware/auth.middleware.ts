import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestService } from "../service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    private readonly logger = new Logger(AuthMiddleware.name);

    constructor(private readonly requestService: RequestService){}
    
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(AuthMiddleware.name);
        // logic authentication
        const {userId} = req.query;
        this.requestService.setUserId(userId);

        next();
    }
}