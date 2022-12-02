import React from "react"
import { IButton } from "./button.interface";
import * as S from './button.styles'

const Button: React.FC<IButton> = ({ label, action }) => {
  return (
    <S.Button onClick={action}>
      {label}
    </S.Button>
  )
}

export default Button
