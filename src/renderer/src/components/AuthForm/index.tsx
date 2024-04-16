import { FC, useState } from 'react'
import { IAuthForm } from './types'
import styles from './styles.module.scss'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'
import Loader from '../Loader'

const AuthForm: FC<IAuthForm> = ({ onSubmit, disabled, isError, defaultValue }) => {
  const [id, setId] = useState<string>(defaultValue ?? '')

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(id)
      }}
    >
      <FormControl sx={{ mb: 3 }}>
        <TextField
          error={isError}
          disabled={disabled}
          size="small"
          required
          id="auth-form-input"
          label="Идентификатор клиента"
          type="password"
          autoComplete="off"
          aria-describedby="auth-form-input-helper-text"
          defaultValue={defaultValue}
          onChange={(event) => setId(event.target.value)}
        />

        <FormHelperText id="auth-form-input-helper-text">
          <span>See: </span>
          <a
            href="https://dev.twitch.tv/console"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Twitch dev console
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
        {disabled ? <Loader className={styles.loader} /> : 'Login'}
      </Button>
    </form>
  )
}

export default AuthForm
