import { useEffect, useState } from 'react'
import { WebSocketSingleton } from '../utils/WebSocketSingleton'

export const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const websocketInstance = WebSocketSingleton.getInstance(url)

    setSocket(websocketInstance)

    websocketInstance.onopen = () => setIsOpen(true)
    websocketInstance.onclose = () => setIsOpen(false)
    websocketInstance.onerror = () => setIsError(true)

    return () => websocketInstance.close()
  }, [url])

  return { socket, isOpen, isError }
}
