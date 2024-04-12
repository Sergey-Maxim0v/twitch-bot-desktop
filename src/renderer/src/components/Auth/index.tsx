import styles from './styles.module.scss'
import { FC, useEffect, useState } from 'react'
import { IAuth } from './types'
import AuthForm from '../AuthForm'
import { ITwitchAuth } from '../../types/ITwitchAuth'
import { useTwitchAuth } from '../../hooks/useTwitchAuth'

const Auth: FC<IAuth> = ({ setSocket }) => {
  const [authData, setAuthData] = useState<ITwitchAuth>({
    username: '',
    token: ''
  })

  const { isLoading, socket, isAuth, isError } = useTwitchAuth({ authData })

  useEffect(() => {
    if (!!socket && isAuth) {
      setSocket(socket)
    }
  }, [socket, isAuth])

  const onSubmit = (data: ITwitchAuth) => {
    // TODO: авторизация по клику
    setAuthData(data)
  }

  // TODO: логика авторизации с автоматическим получением токена,
  //  логика сохранения данных для авторизации в файл

  return (
    <div className={styles.auth}>
      <AuthForm isError={isError} disabled={isLoading} onSubmit={onSubmit} />
    </div>
  )
}

export default Auth
