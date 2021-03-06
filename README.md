# Discord notifications

## Install steps

## How to use

On your config/init/index file import the package
```js
import { DiscordNotification } from '@package/bla'
```

Initialize the settings
```js
// Name of the microservice / webhook of discord
export const discordNotification = new DiscordNotification('MS-PAYMENT', 'https://www.webhook.discord')
```

Call discordNotification obj, see the example above
```js
// Get the variable in others files
discordNotification
  .sucessfulMessage()
  .addTitle('Novo pedido #666')
  .addDescription('Blablablabla')
  .addField({name: 'Nome', value: 'Higorokun', inline: false }) //breakline
  .addField({name: 'Valor', value: 'R$ 10'})
  .addField({ name: 'Estabelecimento', value: 'Pao de queijo e cia' })
  .addFooter('bla bla bla') // Small text at the end of discord notification
  .sendMessage()
```

### messageTypes
There are 4 messages

```js
discordNotification.message() // Shows message without color
discordNotification.sucessfulMessage() // Shows green message
discordNotification.infoMessage() // Shows Blue message
discordNotification.errorMessage() // Shows red message
discordNotification.warningMessage() // Shows orange message
discordNotification.warningMessage() // Shows orange message
```

### Examples

```js
import { DiscordNotification } from "./DiscordNotification";

export const discordNotification = new DiscordNotification('MS-TEST', 'https://discordapp.com/api/webhooks/717408724918075412/FdZJOlH-T1yDre9bo6ar0UCpATo-9-YqomiID1I0HiXxG4tF6brZqNbqLQDB5mD7Rxr6')
  
discordNotification
  .sucessfulMessage()
  .addTitle('Novo pedido #666')
  .addDescription('Blablablabla')
  .addField({name: 'Nome', value: 'Higorokun'})
  .addField({name: 'Valor', value: 'R$ 10'})
  .addField({ name: 'Estabelecimento', value: 'Pao de queijo e cia' })
  .sendMessage()
```

#### you can use @here or @everyone if is something critical using `addContent`

```js
discordNotification
  .errorMessage()
  .addTitle('Error bla')
  .addContent('@everyone')
  .sendMessage()

discordNotification
  .errorMessage()
  .addTitle('Error bla')
  .addContent('@here looks here!')
  .sendMessage()
```

#### Send formatted JSON

```js

discordNotification
  .errorMessage()
  .addTitle('Error bla')
  .addContent('```json'+ '\n' + JSON.stringify({ "myjson": "bla" }) +'```')
  .sendMessage()
``` 

#### Send formatted Stack error message

```js
try {
  throw new Error('My error')
} catch (error) {
  const e: Error = error as Error
  discordNotification
    .errorMessage()
    .addTitle(e.message)
    .addContent('```json'+ '\n' + JSON.stringify({
      "teste": "teste"
      }) +'```')
  .sendMessage()
}
```

#### Other examples

```js
discordNotification
  .sucessfulMessage()
  .addTitle('Testing color green (success)')
  .sendMessage()

discordNotification
  .errorMessage()
  .addTitle('Testing color red (error)')
  .sendMessage()

discordNotification
  .warningMessage()
  .addTitle('Testing color orange (warning)')
  .sendMessage()

discordNotification
  .infoMessage()
  .addTitle('Testing color blue (info)')
  .sendMessage()

discordNotification
  .message()
  .addTitle('Testing no color')
  .sendMessage()
```
