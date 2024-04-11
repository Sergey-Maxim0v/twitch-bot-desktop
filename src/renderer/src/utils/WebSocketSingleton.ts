export class WebSocketSingleton {
  private static instance: WebSocket

  private static createInstance(url) {
    return new WebSocket(url)
  }

  public static getInstance(url) {
    if (!WebSocketSingleton.instance) {
      WebSocketSingleton.instance = WebSocketSingleton.createInstance(url)
    }

    return WebSocketSingleton.instance
  }
}
