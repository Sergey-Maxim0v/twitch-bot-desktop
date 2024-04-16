export interface IAuthForm {
  onSubmit: (val: string) => void
  defaultValue?: string
  disabled?: boolean
  isError?: boolean
}
