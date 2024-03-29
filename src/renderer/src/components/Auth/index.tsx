import Loader from '../Loader'
import styles from './styles.module.scss'
import { FC } from 'react'
import { IAuth } from './types'

const Auth: FC<IAuth> = ({ isLoading }): JSX.Element => {
  return (
    <div className={styles.auth}>
      {isLoading && <Loader className={styles.loader} />}

      <p>TODO: Auth form</p>

      <a
        href="https://dev.twitch.tv/docs/irc/authenticate-bot/"
        target="_blank"
        className=""
        rel="noreferrer"
      >
        dev.twitch.tv
      </a>
    </div>
  )
}

export default Auth
