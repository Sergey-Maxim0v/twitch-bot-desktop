import { Dispatch, SetStateAction } from 'react'

export interface IAuth {
  setSocket: Dispatch<SetStateAction<WebSocket | null>>
}
