import { SuccessfulMessage, ErrorMessage, WarningMessage, InfoMessage, NoColorMessage } from "./MessageVariants";
export declare class DiscordNotification {
    microserviceName: string;
    webhook: string;
    constructor(microserviceName: string, webhook: string);
    message(): NoColorMessage;
    sucessfulMessage(): SuccessfulMessage;
    errorMessage(): ErrorMessage;
    warningMessage(): WarningMessage;
    infoMessage(): InfoMessage;
}
