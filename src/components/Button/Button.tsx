import React from "react"
import { IButton } from "./button.interface";
import * as S from './button.styles'

const Button: React.FC<IButton> = ({ label }) => {

  const handleClickButton = (): void => {

  }
  
  return (
    <S.Button onClick={handleClickButton}>
      {label}
    </S.Button>
  )
}

export default Button
