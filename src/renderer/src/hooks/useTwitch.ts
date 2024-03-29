import { useWebSocket } from './useWebSocket'
import { TWITCH_URL } from '../constants/twitchURL'
import { ITwitchAuth } from '../types/ITwitchAuth'
import { useTwitchAuth } from './useTwitchAuth'
import { useTwitchPingPong } from './useTwitchPingPong'

export const useTwitch = (authData: ITwitchAuth) => {
  const { socket } = useWebSocket(TWITCH_URL)
  const { isAuth, isLoading } = useTwitchAuth({ authData })

  useTwitchPingPong({ socket, isAuth })

  return { socket, isAuth, isLoading }
}
