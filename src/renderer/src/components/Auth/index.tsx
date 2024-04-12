import styles from './styles.module.scss'
import { FC } from 'react'
import { IAuth } from './types'
import AuthForm from '../AuthForm'

const Auth: FC<IAuth> = ({ isLoading, authData, setAuthData }) => {
  // TODO: логика авторизации с автоматическим получением токена, логика сохранения данных для авторизации

  return (
    <div className={styles.auth}>
      <AuthForm authData={authData} setAuthData={setAuthData} disabled={isLoading} />
    </div>
  )
}

export default Auth
