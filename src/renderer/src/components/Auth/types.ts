import { ITwitchAuth } from '../../types/ITwitchAuth'
import { Dispatch, SetStateAction } from 'react'

export interface IAuth {
  isLoading: boolean
  authData: ITwitchAuth
  setAuthData: Dispatch<SetStateAction<ITwitchAuth>>
}
