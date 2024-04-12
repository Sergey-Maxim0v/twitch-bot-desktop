import { useTwitch } from './hooks/useTwitch'
import Auth from './components/Auth'
import { useState } from 'react'
import { ITwitchAuth } from './types/ITwitchAuth'
import SystemThemeProvider from './components/SystemThemeProvider'

function App() {
  const [authData, setAuthData] = useState<ITwitchAuth>({
    username: 'grey-bot',
    token: '4d5izmqecqs87oam9kxl8jvw0pecvj'
  })

  const { isAuth, isLoading } = useTwitch(authData)

  // TODO: router (страница авторизации и под каждый чат)

  // if (!isAuth) {
  return (
    <SystemThemeProvider>
      <Auth isLoading={isLoading} authData={authData} setAuthData={setAuthData} />
    </SystemThemeProvider>
  )
  // }

  // return (
  //   <div>
  //     <p>TODO: app</p>
  //     <br />
  //   </div>
  // )
}

export default App
