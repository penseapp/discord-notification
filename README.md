# Discord notifications


<div align="center">

![npm](https://img.shields.io/npm/dw/@penseapp/discord-notification)<br>
  
[![npm version](https://badge.fury.io/js/@penseapp%2Fdiscord-notification.svg)](https://badge.fury.io/js/@penseapp%2Fdiscord-notification)
  
![test](https://github.com/penseapp/discord-notification/workflows/test/badge.svg?branch=master)
![GitHub Workflow Status (event)](https://img.shields.io/github/workflow/status/penseapp/discord-notification/test)
[![Coverage Status](https://coveralls.io/repos/github/penseapp/discord-notification/badge.svg?branch=master)](https://coveralls.io/github/penseapp/discord-notification?branch=master)
[![License Status](https://img.shields.io/github/license/penseapp/discord-notification)](https://img.shields.io/github/license/penseapp/discord-notification)

[![Issues Status](https://img.shields.io/github/issues/penseapp/discord-notification)](https://img.shields.io/github/issues/penseapp/discord-notification)
[![Tag Status](https://img.shields.io/github/v/tag/penseapp/discord-notification)](https://img.shields.io/github/v/tag/penseapp/discord-notification)
[![Languages Status](https://img.shields.io/github/languages/count/penseapp/discord-notification)](https://img.shields.io/github/languages/count/penseapp/discord-notification)
</div>

## Install steps

```sh
npm i @penseapp/discord-notification
```
or
```sh
yarn add @penseapp/discord-notification
```
## How to use

Import the package:
```js
import { DiscordNotification } from '@penseapp/discord-notification'
```

Instantiate a new class of DiscordNotification passing the name and discord webhook 
```js
// Name of the microservice / webhook of discord
export const discordNotification = new DiscordNotification('my-name', 'https://discordapp.com/api/webhooks/qNbqLQDB5mD7Rxr6')
```

Call discordNotification obj, see the example above
```js
// Get the variable in others files
discordNotification
  .sucessfulMessage()
  .addTitle('My title')
  .addDescription('My description')
  .addField({name: 'Field 1', value: 'Content #1', inline: false }) //breakline
  .addField({name: 'Field 2', value: 'Content #2' }) 
  .addField({name: 'Field 3', value: 'Content #3' }) 
  .addFooter('My footer') // Small text at the end of discord notification
  .sendMessage()
```

The output on discord will be:

![image](https://user-images.githubusercontent.com/5152197/151089826-e50f6174-8152-46c9-b2ae-d1b230f7e47d.png)


### messageTypes
There are 5 different messages

```js
discordNotification.message() // Shows message without color
discordNotification.sucessfulMessage() // Shows green message
discordNotification.infoMessage() // Shows Blue message
discordNotification.errorMessage() // Shows red message
discordNotification.warningMessage() // Shows orange message
```

### Examples

```js
import { DiscordNotification } from "./DiscordNotification";

export const discordNotification = new DiscordNotification('my-name', 'https://discordapp.com/api/webhooks/qNbqLQDB5mD7Rxr6')
  
discordNotification
  .sucessfulMessage()
  .addTitle('My title')
  .addDescription('My description')
  .addField({name: 'Field 1', value: 'Content #1', inline: false }) //breakline
  .addField({name: 'Field 2', value: 'Content #2' }) 
  .addField({name: 'Field 3', value: 'Content #3' }) 
  .addFooter('My footer') // Small text at the end of discord notification
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

### Discord webhook

```
Open Discord -> select the channel -> Click on configuration -> Integrations -> View webhooks -> New webhook
```

Create a new webhook called `Discord notification` and add on Github secrets with a name of `DISCORD_CHANNEL_WEBHOOK`, like the GIF bellow:

![Peek 2021-06-02 22-21](https://user-images.githubusercontent.com/5152197/121472497-aa56ec00-c997-11eb-83cb-b9f03094e5dd.gif)

Now, you will receive the notifications on the desired discord channel.
