import React from "react";
import Button from "../Button/Button";
import { IWelcomeScreen } from "./welcomeScreen.interface";
import * as S from './welcomeScreen.styles'

const WelcomeScreen: React.FC<IWelcomeScreen> = ({ level, changeLevel }) => {
  const levelText = ["Facil", "Medio", "Dificl"]

  return (
    <S.WelcomeScreenContainer>
      <S.Title>Juego de <span>memoria</span></S.Title>
      <S.Controls>
        <Button label={levelText[level]} action={changeLevel} />
        <Button label="Iniciar juego"  />
      </S.Controls>
    </S.WelcomeScreenContainer>
  )
}

export default WelcomeScreen
