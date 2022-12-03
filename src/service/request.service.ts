import { Injectable, Scope } from "@nestjs/common";

@Injectable({scope: Scope.REQUEST})
export class RequestService {
    private userId: string;

    public setUserId (userId) {
        this.userId = userId;
    }

    public getUserId (): string {
        return this.userId;
    }
}