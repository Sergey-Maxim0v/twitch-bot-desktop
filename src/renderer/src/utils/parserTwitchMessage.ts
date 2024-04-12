export const parserTwitchMessage = (message: string) => {
  const parts = message.split('\r\n')
  const filtered = parts.filter((el) => !!el.trim())

  // TODO: parser
  console.log(filtered)
  return {}
}
