import { useEffect } from 'react'
import { tmiSay } from '../../tmi/tmiSay'

function App(): JSX.Element {
  const messages = []

  console.log(messages)

  useEffect(() => {
    setTimeout(() => {
      tmiSay({ message: 'test message from react' })
    }, 1000)
  }, [])

  return (
    <div>
      <p>TODO: app</p>
      <br />
      <p>{messages.join('\n')}</p>
    </div>
  )
}

export default App
