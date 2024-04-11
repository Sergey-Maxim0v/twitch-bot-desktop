import Loader from '../Loader'
import styles from './styles.module.scss'
import { FC } from 'react'
import { IAuth } from './types'
import AuthForm from '../AuthForm'

const Auth: FC<IAuth> = ({ isLoading, authData, setAuthData }) => {
  // TODO: логика авторизации с автоматическим получением токена, логика сохранения данных для авторизации

  return (
    <div className={styles.auth}>
      {isLoading && <Loader className={styles.loader} />}

      <AuthForm authData={authData} setAuthData={setAuthData} />
    </div>
  )
}

export default Auth
