import { ITwitchAuth } from '../../types/ITwitchAuth'

export interface IAuthForm {
  onSubmit: (val: ITwitchAuth) => void
  disabled: boolean
  isError?: boolean
}
