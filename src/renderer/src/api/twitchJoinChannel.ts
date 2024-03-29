import { TwitchMessageCodes } from '../constants/twitchMessageCodes'

export const twitchJoinChannel = ({ socket, channel }: { socket: WebSocket; channel: string }) =>
  socket.send(`${TwitchMessageCodes.channelJoin} #${channel}`)
