"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordNotification = void 0;
var DiscordNotification_1 = require("./DiscordNotification");
// bootstrap da aplicação
exports.discordNotification = new DiscordNotification_1.DiscordNotification('MS-TEST', 'https://discord.com/api/webhooks/803700867030974504/-mdVYyS7PYiiOtpLbMrMdutlcUYyarCZ4SnkxiLAJtv6JV134i9zq5MfiQerqliqP_ai');
try {
    exports.discordNotification
        .sucessfulMessage()
        .addFooter('qeqiheiqwuehqw')
        .addTitle('woeqeuh')
        .addField({ name: 'higor bocó', value: 'miguel teta' })
        .addTitle('qwiuehqiueqhwe')
        .addContent('```json' + '\n' + JSON.stringify({
        "teste": "teste"
    }) + '```')
        .sendMessage();
    throw new Error('Meu erro bla');
}
catch (error) {
    var e = error;
    exports.discordNotification
        .errorMessage()
        // .addFooter(e.stack || 'Sem stack de erro')
        .addTitle(e.message)
        .addContent('```json' + '\n' + JSON.stringify({
        "teste": "teste"
    }) + '```')
        .sendMessage();
}
//# sourceMappingURL=teste.js.map