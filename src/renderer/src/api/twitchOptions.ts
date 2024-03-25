/**
 @see https://dev.twitch.tv/docs/irc/authenticate-bot/
 */
const token = '4d5izmqecqs87oam9kxl8jvw0pecvj'
const username = 'grey-bot'
const channels = [
  'grey7788' // TODO
  // 'linaneyeon' // TODO
]

export const twitchOptions = {
  identity: {
    username,
    token
  },
  channels
}
