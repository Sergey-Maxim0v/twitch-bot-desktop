import { FC, useState } from 'react'
import { IAuthForm } from './types'
import styles from './styles.module.scss'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'

const AuthForm: FC<IAuthForm> = ({ authData, setAuthData }) => {
  const [name, setName] = useState(authData.username)
  const [token, setToken] = useState(authData.token)

  // TODO: темная тема, стили формы, логика формы

  return (
    <div className={styles.form}>
      <TextField
        size="small"
        required
        id="auth-form-username"
        label="User name"
        defaultValue={authData.username}
        aria-describedby="auth-form-username-helper-text"
        onChange={(event) => setName(event.target.value)}
      />

      <FormControl>
        <TextField
          size="small"
          required
          id="auth-form-token"
          label="Token"
          type="password"
          autoComplete="current-password"
          aria-describedby="auth-form-token-helper-text"
          defaultValue={authData.token}
          onChange={(event) => setToken(event.target.value)}
        />

        <FormHelperText id="auth-form-token-helper-text">
          <span>See </span>
          <a
            href="https://dev.twitch.tv/docs/irc/authenticate-bot/"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            dev.twitch.tv
          </a>
        </FormHelperText>
      </FormControl>

      <Button
        variant="outlined"
        size="small"
        onSubmit={(event) => {
          event.preventDefault()
          setAuthData({ username: name, token: token })
        }}
      >
        Authorize
      </Button>
    </div>
  )
}

export default AuthForm
