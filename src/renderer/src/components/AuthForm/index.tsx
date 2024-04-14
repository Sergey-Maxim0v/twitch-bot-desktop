import { FC, useState } from 'react'
import { IAuthForm } from './types'
import styles from './styles.module.scss'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'
import Loader from '../Loader'
import { ITwitchAuth } from '../../types/ITwitchAuth'

const AuthForm: FC<IAuthForm> = ({ onSubmit, disabled, isError, defaultValue }) => {
  const [name, setName] = useState<ITwitchAuth['username']>(defaultValue?.username ?? '')
  const [token, setToken] = useState<ITwitchAuth['token']>(defaultValue?.token ?? '')

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit({ username: name, token: token })
      }}
    >
      <FormControl sx={{ mb: 3 }}>
        <TextField
          error={isError}
          disabled={disabled}
          required
          size="small"
          id="auth-form-username"
          label="User name"
          defaultValue={name}
          aria-describedby="auth-form-username-helper-text"
          onChange={(event) => setName(event.target.value)}
        />
        <FormHelperText id="auth-form-username-helper-text">
          <a href="https://dev.twitch.tv/console" target="_blank" className="" rel="noreferrer">
            dev.twitch.tv
          </a>
        </FormHelperText>
      </FormControl>

      <FormControl sx={{ mb: 3 }}>
        <TextField
          error={isError}
          disabled={disabled}
          size="small"
          required
          id="auth-form-token"
          label="Token"
          type="password"
          autoComplete="current-password"
          aria-describedby="auth-form-token-helper-text"
          defaultValue={token}
          onChange={(event) => setToken(event.target.value)}
        />

        <FormHelperText id="auth-form-token-helper-text">
          <a
            href="https://dev.twitch.tv/docs/irc/authenticate-bot/"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            dev.twitch.tv/docs/irc/authenticate-bot
          </a>
        </FormHelperText>
      </FormControl>

      <Button
        disabled={disabled}
        variant="outlined"
        size="small"
        className={styles.button}
        type="submit"
      >
        {disabled ? <Loader className={styles.loader} /> : 'Authorize'}
      </Button>
    </form>
  )
}

export default AuthForm
