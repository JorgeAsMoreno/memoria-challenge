import React from "react";
import Button from "../Button/Button";
import * as S from './welcomeScreen.styles'

const WelcomeScreen: React.FC = () => {
  return (
    <S.WelcomeScreenContainer>
      <S.Title>Juego de <span>memoria</span></S.Title>
      <Button label="Iniciar juego" />
    </S.WelcomeScreenContainer>
  )
}

export default WelcomeScreen
