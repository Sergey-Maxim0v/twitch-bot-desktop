import { Dispatch, SetStateAction } from 'react'
import { ITwitchAuth } from '../../types/ITwitchAuth'

export interface IAuthForm {
  authData: ITwitchAuth
  setAuthData: Dispatch<SetStateAction<ITwitchAuth>>
  disabled: boolean
  isError?: boolean
}
