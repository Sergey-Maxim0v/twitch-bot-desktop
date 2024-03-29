export const parserTwitchMessage = (message: string) => {
  const parts = message.split('\r\n')
  const filtered = parts.filter((el) => !!el.trim())

  console.log(filtered)
  return {}
}
