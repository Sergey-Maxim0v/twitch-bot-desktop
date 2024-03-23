import * as tmi from 'tmi.js'
import { options } from './options'
import { onTmiConnectedHandler } from './onTmiConnectedHandler'
import { onTmiMessageHandler } from './onTmiMessageHandler'

const tmiClient = new tmi.client(options)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
tmiClient.on('message', onTmiMessageHandler)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
tmiClient.on('connected', onTmiConnectedHandler)

export default tmiClient
