import { TwitchMessageCodes } from './constants/twitchMessageCodes'

export const twitchSay = ({
  socket,
  channel,
  message
}: {
  socket: WebSocket
  message: string
  channel: string
}) => socket.send(`${TwitchMessageCodes.message} #${channel} :${message}`)
