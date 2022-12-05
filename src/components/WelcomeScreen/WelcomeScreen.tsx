import React from "react";
import Button from "../Button/Button";
import { IWelcomeScreen } from "./welcomeScreen.interface";
import * as S from './welcomeScreen.styles'

const WelcomeScreen: React.FC<IWelcomeScreen> = ({ setStart, changeDifficulty, level, levelNumber }) => {
  const levelText = [
    'Fácil',
    'Medio',
    'Difícil'
  ]
  
  return (
    <S.WelcomeScreenContainer>
      <S.Title>Juego de <span>memoria</span></S.Title>
      <S.Controls>
        <Button label={`Cambiar dificultad: ${levelText[level]}`} action={changeDifficulty} />
        <S.Pairs>En el nivel <span>{levelText[level]}</span> hay <span>{levelNumber[level] / 2}</span> pares a encontrar</S.Pairs>
        <Button label="Iniciar juego" action={() => setStart(1)} />
      </S.Controls>
    </S.WelcomeScreenContainer>
  )
}

export default WelcomeScreen
