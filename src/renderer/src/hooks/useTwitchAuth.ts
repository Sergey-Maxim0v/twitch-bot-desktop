import { useEffect, useState } from 'react'
import { ITwitchAuth } from '../types/ITwitchAuth'
import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../constants/twitchURL'
import { TwitchMessageCodes } from '../constants/twitchMessageCodes'
import { twitchAuth } from '../api/twitchAuth'

export const useTwitchAuth = ({ authData }: { authData: ITwitchAuth }) => {
  const { socket, isOpen } = useWebSocket(TWITCH_URL)
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isOpen || !authData.username || !authData.token || !socket) {
      return
    }

    twitchAuth({
      socket,
      token: authData.token,
      username: authData.username
    })

    const onMessage = (event: MessageEvent) => {
      if (String(event.data).includes(TwitchMessageCodes.authSuccess)) {
        setIsAuth(true)
        setIsLoading(false)

        socket.removeEventListener('message', onMessage)
      }
    }

    socket.addEventListener('message', onMessage)

    return () => socket.removeEventListener('message', onMessage)
  }, [isOpen, authData])

  return { isAuth, isLoading }
}
