import { tmiSay } from './tmiSay'

export const onTmiMessageHandler = (target, context, msg, self): void => {
  if (self) {
    return
  } // Ignore messages from the bot

  const commandName = msg.trim()

  if (commandName === '!dice') {
    const num = rollDice()
    tmiSay({ target, message: `You rolled a ${num}` })

    console.log(`* Executed ${commandName} command`)
  } else {
    console.log(`* Unknown command ${commandName}`)
  }
}

function rollDice(): number {
  const sides = 6
  return Math.floor(Math.random() * sides) + 1
}
