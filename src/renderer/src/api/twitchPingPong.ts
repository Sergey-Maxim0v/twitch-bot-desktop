import { TwitchMessageCodes } from './constants/twitchMessageCodes'

export const twitchPingPong = ({ socket, message }: { socket: WebSocket; message: string }) =>
  socket.send(message.replace(TwitchMessageCodes.ping, TwitchMessageCodes.pong))
