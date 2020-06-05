"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiscordNotification_1 = require("./DiscordNotification");
// bootstrap da aplicação
exports.discordNotification = new DiscordNotification_1.DiscordNotification('MS-TEST', 'https://discordapp.com/api/webhooks/717408724918075412/FdZJOlH-T1yDre9bo6ar0UCpATo-9-YqomiID1I0HiXxG4tF6brZqNbqLQDB5mD7Rxr6');
// em outros arquivo
exports.discordNotification
    .sucessfulMessage()
    .addFooter('iheqwiu hewqiu ehqw hqwiue hwqiu ehqwiuehqwi lhasdkjqwbeh jabdhjqwbe qwe bqwi dwqui eqwiue wq')
    .addTitle('OMAE NO RO, SHINDAIRU')
    .addDescription('NANIANIANIANIA')
    .addField({ name: 'Nome', value: 'gritzkosan' })
    .addField({ name: 'Valor', value: 'R$ 10' })
    .addField({ name: 'Estabelecimento', value: 'OMae' })
    .sendMessage();
