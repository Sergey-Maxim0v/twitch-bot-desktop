import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../api/constants/twitchURL'
import { useTwitchPingPong } from './useTwitchPingPong'
import { useEffect, useState } from 'react'
import { TwitchMessageCodes } from '../api/constants/twitchMessageCodes'

export const useTwitch = () => {
  const { socket } = useWebSocket(TWITCH_URL)

  const [isAuth, setIsAuth] = useState(true)
  const [isError, setIsError] = useState(false)

  useTwitchPingPong({ socket, isAuth })

  useEffect(() => {
    if (!socket) {
      return
    }

    const authListener = (event: MessageEvent) => {
      if (event && event.data?.includes(TwitchMessageCodes.authFailed)) {
        setIsAuth(false)
      }
    }

    const errorListener = () => setIsError(true)

    socket.addEventListener('message', authListener)
    socket.addEventListener('error', errorListener)

    return () => {
      socket.removeEventListener('message', authListener)
      socket.removeEventListener('error', errorListener)
    }
  }, [socket])

  // TODO: console.log
  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => console.log(event.data)
    }
  }, [socket])

  return { socket, isAuth, isError }
}
