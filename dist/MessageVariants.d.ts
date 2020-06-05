import { Message } from "./Message";
export declare class NoColorMessage extends Message {
    constructor(microserviceName: string, webhook: string);
}
export declare class SuccessfulMessage extends Message {
    constructor(microserviceName: string, webhook: string);
}
export declare class WarningMessage extends Message {
    constructor(microserviceName: string, webhook: string);
}
export declare class InfoMessage extends Message {
    constructor(microserviceName: string, webhook: string);
}
export declare class ErrorMessage extends Message {
    constructor(microserviceName: string, webhook: string);
}
