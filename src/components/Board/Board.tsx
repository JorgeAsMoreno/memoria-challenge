import React, { useState, useEffect } from 'react';
import { data } from '../../data/data';
import Card from '../Card/Card';
import { IBoardCards } from './board.interface';
import * as S from './board.styles'

const Board: React.FC = () => {
  const [cards, setCards] = useState<IBoardCards[]>([])

  useEffect(() => {
    
  }, [])

  return (
    <S.BoardContainer>
      <S.BoardInformation>
        <S.Info>
          Moves
        </S.Info>
        <S.Info>
          Time
        </S.Info>
      </S.BoardInformation>
      <S.BoardGame>
        {
          data.map(({ name, frontFace, id}) => (
            <Card key={id} {...{name, frontFace, id }} />
          ))
        }
        <S.RestartGameButton>
          Reiniciar Juego
        </S.RestartGameButton>
      </S.BoardGame>
    </S.BoardContainer>
  )
}

export default Board
