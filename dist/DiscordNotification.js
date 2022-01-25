"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordNotification = void 0;
var MessageVariants_1 = require("./MessageVariants");
var DiscordNotification = /** @class */ (function () {
    function DiscordNotification(name, webhook) {
        this.name = name;
        this.webhook = webhook;
    }
    DiscordNotification.prototype.message = function () {
        var message = new MessageVariants_1.NoColorMessage(this.name, this.webhook);
        message.embeds.name = this.name;
        return message;
    };
    DiscordNotification.prototype.sucessfulMessage = function () {
        var successfulMessage = new MessageVariants_1.SuccessfulMessage(this.name, this.webhook);
        successfulMessage.embeds.name = this.name;
        return successfulMessage;
    };
    DiscordNotification.prototype.errorMessage = function () {
        var errorMessage = new MessageVariants_1.ErrorMessage(this.name, this.webhook);
        errorMessage.embeds.name = this.name;
        return errorMessage;
    };
    DiscordNotification.prototype.warningMessage = function () {
        var warningMessage = new MessageVariants_1.WarningMessage(this.name, this.webhook);
        warningMessage.embeds.name = this.name;
        return warningMessage;
    };
    DiscordNotification.prototype.infoMessage = function () {
        var infoMessage = new MessageVariants_1.InfoMessage(this.name, this.webhook);
        infoMessage.embeds.name = this.name;
        return infoMessage;
    };
    return DiscordNotification;
}());
exports.DiscordNotification = DiscordNotification;
//# sourceMappingURL=DiscordNotification.js.map