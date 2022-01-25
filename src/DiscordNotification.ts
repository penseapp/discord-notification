import { SuccessfulMessage, ErrorMessage, WarningMessage, InfoMessage, NoColorMessage } from "./MessageVariants";

export class DiscordNotification {
  name: string;
  webhook: string;

  constructor(name: string, webhook: string) {
    this.name = name;
    this.webhook = webhook;
  }

  message() {
    const message = new NoColorMessage(this.name, this.webhook);
    message.embeds.name = this.name;

    return message;
  }

  sucessfulMessage() {
    const successfulMessage = new SuccessfulMessage(this.name, this.webhook);
    successfulMessage.embeds.name = this.name;

    return successfulMessage;
  }

  errorMessage() {
    const errorMessage = new ErrorMessage(this.name, this.webhook);
    errorMessage.embeds.name = this.name;

    return errorMessage;
  }

  warningMessage() {
    const warningMessage = new WarningMessage(this.name, this.webhook);
    warningMessage.embeds.name = this.name;

    return warningMessage;
  }

  infoMessage() {
    const infoMessage = new InfoMessage(this.name, this.webhook);
    infoMessage.embeds.name = this.name;

    return infoMessage;
  }
}
