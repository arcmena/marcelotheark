import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input = ({ name, ...props }: InputProps) => {
  return <InputContainer data-testid={`Input-${name}`} name={name} {...props} />
}

export default Input
