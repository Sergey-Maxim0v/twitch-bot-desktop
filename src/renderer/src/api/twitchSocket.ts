import { TWITCH_URL } from '../constants/twitchURL'

export interface ITwitchSocketSay {
  chanel: string
  message: string
}

export interface ITwitchSocketOpen {
  username: ITwitchAuth['username']
  token: ITwitchAuth['token']
  channels: ITwitchSocket['channels']
  // TODO: any
  onMessage: (message: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface ITwitchAuth {
  username: string
  token: string
}

export interface ITwitchSocket extends ITwitchAuth {
  channels: string[]
  // TODO: any
  onMessage: (message: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class TwitchSocket {
  public socket: WebSocket | null = null

  private onMessage: (() => void) | null = null
  private username: string | null = null

  constructor({ username, token, onMessage, channels }: ITwitchSocket) {
    this.openSocket({ username, token, channels, onMessage })

    this.onMessage = (): void => this.socket?.addEventListener('message', onMessage)
  }

  private openSocket({ username, token, channels, onMessage }: ITwitchSocketOpen): void {
    this.socket?.close()
    this.socket = new WebSocket(TWITCH_URL)

    this.socket.addEventListener('open', () =>
      this.onOpen({ username, token, channels, onMessage })
    )
    this.socket.addEventListener('close', () =>
      this.openSocket({ username, token, channels, onMessage })
    )
    this.socket.addEventListener('error', (error) => {
      console.warn('Socket error::: ', error)
      setTimeout(() => this.openSocket({ username, token, channels, onMessage }), 10000)
    })

    this.socket.addEventListener('message', onMessage)
  }

  private onOpen({ username, token, channels }: ITwitchSocketOpen): void {
    if (!this.socket) {
      return
    }

    this.socket.send(`PASS oauth:${token}`)
    this.socket.send(`NICK ${username}`)

    channels.map((chanel) => this.socket.send(`JOIN #${chanel}`))
    channels.map((chanel) => {
      console.log('connected: ', chanel)
      // TODO: hello message
      // this.socket.send(`PRIVMSG #${chanel} :Hello! (${username}: connected)`);
    })
  }

  public say({ chanel, message }: ITwitchSocketSay): void {
    this.socket.send(`PRIVMSG #${chanel} :${this.username ? this.username + ': ' : ''}${message}`)
  }

  public close(): void {
    this.socket.close()
  }
}
