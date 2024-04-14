import { useState } from 'react'
import Router from './components/Router/Router'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)

  return <Router socket={socket} setSocket={setSocket} />
}

export default App
