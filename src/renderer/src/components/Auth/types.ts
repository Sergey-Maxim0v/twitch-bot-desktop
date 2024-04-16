import { Dispatch, SetStateAction } from 'react'

export interface IAuth {
  setIsAuth: Dispatch<SetStateAction<boolean>>
}
