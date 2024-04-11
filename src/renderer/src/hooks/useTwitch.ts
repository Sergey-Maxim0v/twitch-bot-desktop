import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../constants/twitchURL'
import { ITwitchAuth } from '../types/ITwitchAuth'
import { useTwitchAuth } from './useTwitchAuth'
import { useTwitchPingPong } from './useTwitchPingPong'
import { useEffect } from 'react'

export const useTwitch = (authData: ITwitchAuth) => {
  const { socket } = useWebSocket(TWITCH_URL)
  const { isAuth, isLoading } = useTwitchAuth({ authData })

  useTwitchPingPong({ socket, isAuth })

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => console.log(event.data)
    }
  }, [])

  return { socket, isAuth, isLoading }
}
