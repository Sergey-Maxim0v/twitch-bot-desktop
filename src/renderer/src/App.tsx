import { useState } from 'react'
import Auth from './components/Auth'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  // TODO: router (страница авторизации и под каждый канал)

  if (!socket) {
    return <Auth setSocket={setSocket} />
  }

  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}
    >
      <p>TODO: app</p>
    </div>
  )
}

export default App
