import React from "react";
import winnerImage from '../../assets/images/first-place-medal.png'
import Button from "../Button/Button";
import * as S from './winScreen.styles'
import { IWinScreen } from "./winScreen.interface";

const WinScreen: React.FC<IWinScreen> = ({ setStateGame }) => {
  const confettiArray: Array<number> = []

  for (let index = 1; index < 26; index++) {
    confettiArray.push(index)
  }

  return (
    <S.WinContainer>
      <S.ConfettiContainer>
        {
          confettiArray.map(() => (
            <div className="confetti" />
          ))
        }
        
      </S.ConfettiContainer>

      <S.Title>Ganaste!</S.Title>
      <Button label="Volver a jugar" action={() => setStateGame(0)} />
      <S.Image
        src={winnerImage}
        alt="Winner"
      />
    </S.WinContainer>
  )
}

export default WinScreen
