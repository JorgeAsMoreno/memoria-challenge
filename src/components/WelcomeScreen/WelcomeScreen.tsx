import React from "react";
import Button from "../Button/Button";
import { IWelcomeScreen } from "./welcomeScreen.interface";
import * as S from './welcomeScreen.styles'

const WelcomeScreen: React.FC<IWelcomeScreen> = ({ setStart }) => {
  return (
    <S.WelcomeScreenContainer>
      <S.Title>Juego de <span>memoria</span></S.Title>
      <S.Controls>
        <Button label="Iniciar juego" action={() => setStart(1)} />
      </S.Controls>
    </S.WelcomeScreenContainer>
  )
}

export default WelcomeScreen
