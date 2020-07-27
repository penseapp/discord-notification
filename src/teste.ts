import { DiscordNotification } from "./DiscordNotification";

// bootstrap da aplicação
export const discordNotification = new DiscordNotification('MS-TEST', 'https://discordapp.com/api/webhooks/734987387792392273/HKuDhLh3KVb7uxlcsvkrv4iiFx7QVAM7hLLk1L9jm1M-3IYYnjc6JzcJuO4_aGV2Ebig')

try {
  throw new Error('Meu erro bla')
} catch (error) {
  const e: Error = error as Error
  discordNotification
    .errorMessage()
    // .addFooter(e.stack || 'Sem stack de erro')
    .addTitle(e.message)
    .addContent('```json'+ '\n' + JSON.stringify({
      "teste": "teste"
      }) +'```')
  .sendMessage()
}
