import { ITwitchAuth } from '../../types/ITwitchAuth'

export interface IAuthForm {
  onSubmit: (val: ITwitchAuth) => void
  defaultValue?: ITwitchAuth
  disabled?: boolean
  isError?: boolean
}
