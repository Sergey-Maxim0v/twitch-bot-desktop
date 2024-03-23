import tmiClient from './tmiClient'

export const tmiSay = async ({
  target,
  message
}: {
  // TODO
  // eslint-disable-next-line
  target?: any
  message: string
}): Promise<void> => {
  try {
    await tmiClient.say(target, message)
  } catch (error) {
    console.warn('Error tmi say:::', error)
  }
}
