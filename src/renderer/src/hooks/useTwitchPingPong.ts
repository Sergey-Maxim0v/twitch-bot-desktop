import { useEffect } from 'react'
import { TwitchMessageCodes } from '../constants/twitchMessageCodes'
import { twitchPingPong } from '../api/twitchPingPong'

export const useTwitchPingPong = ({
  socket,
  isAuth
}: {
  socket: WebSocket | null
  isAuth: boolean
}) => {
  useEffect(() => {
    if (!isAuth || !socket) {
      return
    }

    const onMessage = (event: MessageEvent) => {
      if (
        event.data &&
        event.data.includes(TwitchMessageCodes.ping) &&
        event.data.includes(':tmi.twitch.tv')
      ) {
        twitchPingPong({ socket, message: event.data })
      }
    }

    socket.addEventListener('message', (event) => onMessage(event))
    return () => socket.removeEventListener('message', (event) => onMessage(event))
  }, [isAuth])
}
