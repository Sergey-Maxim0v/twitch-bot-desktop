import { options } from './options'

import * as tmi from 'tmi.js'

const client = new tmi.client(options)

// Register our event handlers (defined below)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
client.on('message', onMessageHandler)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
client.on('connected', onConnectedHandler)

// Called every time a message comes in
function onMessageHandler(target, context, msg, self): void {
  if (self) {
    return
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim()

  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice()
    client.say(target, `You rolled a ${num}`)
    console.log(`* Executed ${commandName} command`)
  } else {
    console.log(`* Unknown command ${commandName}`)
  }
}

// Function called when the "dice" command is issued
function rollDice(): number {
  const sides = 6
  return Math.floor(Math.random() * sides) + 1
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port): void {
  console.log(`* Connected to ${addr}:${port}`)
}

export default client
