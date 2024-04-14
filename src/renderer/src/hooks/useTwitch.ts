import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../api/constants/twitchURL'
import { useTwitchPingPong } from './useTwitchPingPong'
import { useEffect, useState } from 'react'
import { TwitchMessageCodes } from '../api/constants/twitchMessageCodes'

export const useTwitch = () => {
  const { socket } = useWebSocket(TWITCH_URL)

  const [isAuth, setIsAuth] = useState(true)

  useTwitchPingPong({ socket, isAuth })

  useEffect(() => {
    if (!socket) {
      return
    }

    const listener = (event: MessageEvent) => {
      if (event && event.data?.includes(TwitchMessageCodes.authFailed)) {
        setIsAuth(false)
      }
    }

    socket.addEventListener('message', (e) => listener(e))

    return () => socket.removeEventListener('message', listener)
  }, [socket])

  // TODO: console.log
  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => console.log(event.data)
    }
  }, [socket])

  return { socket, isAuth }
}
