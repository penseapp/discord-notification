import { SuccessfulMessage, ErrorMessage, WarningMessage, InfoMessage, NoColorMessage } from "./MessageVariants";
export declare class DiscordNotification {
    name: string;
    webhook: string;
    constructor(name: string, webhook: string);
    message(): NoColorMessage;
    sucessfulMessage(): SuccessfulMessage;
    errorMessage(): ErrorMessage;
    warningMessage(): WarningMessage;
    infoMessage(): InfoMessage;
}
//# sourceMappingURL=DiscordNotification.d.ts.map