import { Message } from "./Message";
export declare const SUCCESSFUL_COLOR = 51281;
export declare const WARNING_COLOR = 16746496;
export declare const INFO_COLOR = 3388901;
export declare const ERROR_COLOR = 16729156;
export declare const NO_COLOR: undefined;
export declare class NoColorMessage extends Message {
    constructor(name: string, webhook: string);
}
export declare class SuccessfulMessage extends Message {
    constructor(name: string, webhook: string);
}
export declare class WarningMessage extends Message {
    constructor(name: string, webhook: string);
}
export declare class InfoMessage extends Message {
    constructor(name: string, webhook: string);
}
export declare class ErrorMessage extends Message {
    constructor(name: string, webhook: string);
}
//# sourceMappingURL=MessageVariants.d.ts.map