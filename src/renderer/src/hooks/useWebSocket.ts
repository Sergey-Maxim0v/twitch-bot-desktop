import { useEffect, useState } from 'react'
import { WebSocketSingleton } from '../utils/WebSocketSingleton'

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const websocketInstance = WebSocketSingleton.getInstance(url)

    setSocket(websocketInstance)

    websocketInstance.onopen = () => {
      setIsOpen(true)
      setIsLoading(false)
    }

    websocketInstance.onclose = () => {
      setIsOpen(false)
      setIsLoading(false)
    }

    websocketInstance.onerror = () => {
      setIsError(true)
      setIsLoading(false)
    }

    return () => websocketInstance.close()
  }, [url])

  return { socket, isOpen, isError, isLoading }
}
