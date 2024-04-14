import { TwitchMessageCodes } from './constants/twitchMessageCodes'

export const twitchAuth = ({
  socket,
  token,
  username
}: {
  socket: WebSocket
  token: string
  username: string
}) => {
  socket.send(`${TwitchMessageCodes.authPass} oauth:${token}`)
  socket.send(`${TwitchMessageCodes.authLogin} ${username}`)
}
