import { Dispatch, SetStateAction } from 'react'

export interface IRouter {
  socket: WebSocket | null
  setSocket: Dispatch<SetStateAction<WebSocket | null>>
}
