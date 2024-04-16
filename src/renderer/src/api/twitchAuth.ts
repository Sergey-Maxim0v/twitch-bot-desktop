import { TWITCH_AUTH_URL } from './constants/twitchAuthURL'
import { twitchAuthScopes } from './constants/twitchAuthScopes'

/**
 * @see https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#device-code-grant-flow
 */
export const twitchAuth = async (clientId) => {
  const params = new URLSearchParams({
    client_id: clientId,
    scopes: twitchAuthScopes
  })

  return await fetch(TWITCH_AUTH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })
}
