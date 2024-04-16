import styles from './styles.module.scss'
import { FC, useCallback, useState } from 'react'
import AuthForm from '../AuthForm'
import { twitchAuth } from '../../api/twitchAuth'
import { IAuth } from './types'

const Auth: FC<IAuth> = ({ setIsAuth }) => {
  const [isError, setIsError] = useState(false)
  const [disabled, setDisabled] = useState(false)

  // TODO: логика сохранения данных для авторизации в файл

  const onSubmit = useCallback((id: string) => {
    setDisabled(true)

    // TODO: https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow:~:text=complete%20the%20authorization.-,Obtaining,-the%20refresh%20token
    twitchAuth(id)
      .then((res) => {
        // TODO
        console.log('res', res) // eslint-disable-line
        if (!res.ok) {
          setIsError(true)
        }
        return res.json()
      })
      .then((data) => {
        console.log('data', data) // eslint-disable-line
        setDisabled(false)
      })
      .catch((e) => {
        setIsAuth(false)
        console.error('Error twitchAuth', e)
      })
  }, [])

  return (
    <div className={styles.auth}>
      <AuthForm isError={isError} disabled={disabled} onSubmit={onSubmit} />
    </div>
  )
}

export default Auth
