import { useState, useEffect } from 'react'
import * as tmi from 'tmi.js'
import { options } from '../../../twitch/options'

export interface IMessage {
  user: string
  message: string
}

export const useTwitchChat = (): IMessage[] => {
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    const client = new tmi.client(options)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    client.on('message', (channel, userstate, message) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: userstate['display-name'], message }
      ])
    })

    client.connect().catch((error) => console.warn('Error connect', error))

    return () => {
      if (client) {
        client.disconnect().catch((error) => console.warn('Error disconnect', error))
      }
    }
  }, [])

  return chatMessages
}
