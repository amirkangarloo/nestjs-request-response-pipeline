import { ArgumentMetadata, Injectable, Logger, PipeTransform } from "@nestjs/common";

@Injectable()
export class FreezePipe implements PipeTransform {
    private readonly logger = new Logger(FreezePipe.name);
    transform(value: any, metadata: ArgumentMetadata) {
        this.logger.log(FreezePipe.name);
        this.logger.debug(`metadata in pipe: ${JSON.stringify(metadata)}`);
        return value
    }
}