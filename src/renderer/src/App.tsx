import { useEffect, useState } from 'react'
import { ITwitchAuth, TwitchSocket } from './api/twitchSocket'
import { twitchOptions } from './api/twitchOptions'

function App(): JSX.Element {
  const [auth, setAuth] = useState<ITwitchAuth>()
  const [channels, setChannels] = useState([])
  const [socket, setSocket] = useState<TwitchSocket>()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setAuth({
      username: twitchOptions.identity.username,
      token: twitchOptions.identity.token
    })
  }, [])

  useEffect(() => {
    setChannels(twitchOptions.channels)
  }, [])

  useEffect(() => {
    if (!auth || !auth?.username || !auth.token) {
      return
    }

    const freshSocket = new TwitchSocket({
      username: auth.username,
      token: auth.token,
      channels,
      onMessage: (message) => setMessages((prev) => [...prev, message])
    })

    setSocket(freshSocket)

    return () => socket?.close()
  }, [auth, channels])

  console.log(messages)

  return (
    <div>
      <p>TODO: app</p>
      <br />

      {messages.slice(-10).map((message, index) => (
        <div key={index}>
          <p>
            {message.data} <span>|||</span>
          </p>
          <p>-------</p>
        </div>
      ))}
    </div>
  )
}

export default App
