"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordNotification = void 0;
var MessageVariants_1 = require("./MessageVariants");
var DiscordNotification = /** @class */ (function () {
    function DiscordNotification(microserviceName, webhook) {
        this.microserviceName = microserviceName;
        this.webhook = webhook;
    }
    DiscordNotification.prototype.message = function () {
        var message = new MessageVariants_1.NoColorMessage(this.microserviceName, this.webhook);
        message.embeds.name = this.microserviceName;
        return message;
    };
    DiscordNotification.prototype.sucessfulMessage = function () {
        var successfulMessage = new MessageVariants_1.SuccessfulMessage(this.microserviceName, this.webhook);
        successfulMessage.embeds.name = this.microserviceName;
        return successfulMessage;
    };
    DiscordNotification.prototype.errorMessage = function () {
        var errorMessage = new MessageVariants_1.ErrorMessage(this.microserviceName, this.webhook);
        errorMessage.embeds.name = this.microserviceName;
        return errorMessage;
    };
    DiscordNotification.prototype.warningMessage = function () {
        var warningMessage = new MessageVariants_1.WarningMessage(this.microserviceName, this.webhook);
        warningMessage.embeds.name = this.microserviceName;
        return warningMessage;
    };
    DiscordNotification.prototype.infoMessage = function () {
        var infoMessage = new MessageVariants_1.InfoMessage(this.microserviceName, this.webhook);
        infoMessage.embeds.name = this.microserviceName;
        return infoMessage;
    };
    return DiscordNotification;
}());
exports.DiscordNotification = DiscordNotification;
//# sourceMappingURL=DiscordNotification.js.map