"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('ois');
var DiscordNotification_1 = require("./DiscordNotification");
exports.discordNotification = new DiscordNotification_1.DiscordNotification('MS-TEST', 'https://discordapp.com/api/webhooks/717408724918075412/FdZJOlH-T1yDre9bo6ar0UCpATo-9-YqomiID1I0HiXxG4tF6brZqNbqLQDB5mD7Rxr6');
// discordNotification
//   .sucessfulMessage()
//   .addTitle('Novo pedido #666')
//   .addDescription('Blablablabla')
//   .addField({name: 'Nome', value: 'Higorokun'})
//   .addField({name: 'Valor', value: 'R$ 10'})
//   .addField({ name: 'Estabelecimento', value: 'Pao de queijo e cia' })
//   .sendMessage()
// discordNotification
//   .sucessfulMessage()
//   .addTitle('Teste cor verde (sucesso)')
//   .sendMessage()
// discordNotification
//   .errorMessage()
//   .addTitle('Teste cor vermelho (error)')
//   .sendMessage()
// discordNotification
//   .warningMessage()
//   .addTitle('Teste cor laranja (warning)')
//   .sendMessage()
// discordNotification
//   .infoMessage()
//   .addTitle('Teste cor blue (info)')
//   .sendMessage()
exports.discordNotification
    .message()
    .addTitle('Teste sem cor nenhuma')
    .sendMessage();
