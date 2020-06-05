import { Message } from "./Message";
import { SuccessfulMessage, ErrorMessage, WarningMessage, InfoMessage, NoColorMessage } from "./MessageVariants";

export class DiscordNotification {
  microserviceName: string
  webhook: string

  constructor(microserviceName: string, webhook: string) {
    this.microserviceName = microserviceName;
    this.webhook = webhook
  }

  message() {
    const message = new NoColorMessage(this.microserviceName, this.webhook)
    message.embeds.name = this.microserviceName

    return message
  }

  sucessfulMessage() {
    const successfulMessage = new SuccessfulMessage(this.microserviceName, this.webhook)
    successfulMessage.embeds.name = this.microserviceName

    return successfulMessage
  }

  errorMessage() {
    const errorMessage = new ErrorMessage(this.microserviceName, this.webhook)
    errorMessage.embeds.name = this.microserviceName

    return errorMessage
  }

  warningMessage() {
    const warningMessage = new WarningMessage(this.microserviceName, this.webhook)
    warningMessage.embeds.name = this.microserviceName

    return warningMessage
  }

  infoMessage() {
    const infoMessage = new InfoMessage(this.microserviceName, this.webhook)
    infoMessage.embeds.name = this.microserviceName

    return infoMessage
  }
}