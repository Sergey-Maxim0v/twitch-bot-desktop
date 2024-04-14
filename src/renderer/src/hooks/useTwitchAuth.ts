import { useEffect, useState } from 'react'
import { ITwitchAuth } from '../types/ITwitchAuth'
import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../api/constants/twitchURL'
import { TwitchMessageCodes } from '../api/constants/twitchMessageCodes'
import { twitchAuth } from '../api/twitchAuth'

export const useTwitchAuth = ({ authData }: { authData: ITwitchAuth }) => {
  const { socket, isOpen } = useWebSocket(TWITCH_URL)

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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
      // TODO: console.log
      console.log(event.data) // eslint-disable-line no-restricted-syntax
      if (String(event.data).includes(TwitchMessageCodes.authSuccess)) {
        setIsAuth(true)
        setIsLoading(false)

        socket.removeEventListener('message', onMessage)
      }

      if (String(event.data).includes(TwitchMessageCodes.authFailed)) {
        setIsAuth(false)
        setIsLoading(false)
        setIsError(true)

        socket.removeEventListener('message', onMessage)
      }
    }

    socket.addEventListener('message', onMessage)

    return () => socket.removeEventListener('message', onMessage)
  }, [isOpen, authData])

  return { isAuth, isLoading, socket, isError }
}
