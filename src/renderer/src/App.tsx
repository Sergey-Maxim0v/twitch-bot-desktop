import { useTwitch } from './hooks/useTwitch'
import Auth from './components/Auth'
import { useState } from 'react'
import { ITwitchAuth } from './types/ITwitchAuth'
import { twitchOptions } from './api/twitchOptions'

function App(): JSX.Element {
  const [authData, setAuthData] = useState<ITwitchAuth>({
    username: twitchOptions.identity.username,
    token: twitchOptions.identity.token + 1
  })
  const { isAuth, isLoading } = useTwitch(authData)

  if (!isAuth) {
    return <Auth isLoading={isLoading} authData={authData} setAuthData={setAuthData} />
  }

  return (
    <div>
      <p>TODO: app</p>
      <br />
    </div>
  )
}

export default App
