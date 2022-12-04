import { ArgumentMetadata, Injectable, Logger, PipeTransform } from "@nestjs/common";

@Injectable()
export class MePipe implements PipeTransform {
    private readonly logger = new Logger(MePipe.name);
    transform(value: any, metadata: ArgumentMetadata) {
        this.logger.log(MePipe.name);
        this.logger.debug(`metadata in pipe: ${JSON.stringify(metadata)}`);
        return value
    }
}