import React, { useState, useEffect } from 'react';
import { data } from '../../data/data';
import { IBoard, IBoardCards } from './board.interface';
import Card from '../Card/Card';
import * as S from './board.styles'

const Board: React.FC<IBoard> = ({ setStateGame, level, levelNumber }) => {
  const [cards, setCards] = useState<IBoardCards[]>([])
  const [attempts, setAttempts] = useState<number>(0)
  const [foundPairs, setFoundPairs] = useState<number>(0)
  const [disabledCards, setDisabledCards] = useState<Array<number | undefined>>([]) // contains numbers that need to be disabled by match
  const [unFlippedCards, setUnflippedCards] = useState<Array<number | undefined>>([]) // contains numbers that need return the original position
  const [firstCardSelected, setFirstCardSelected] = useState<{name: string, number: number | undefined}>({
    name: '',
    number: undefined
  })
  const [secondCardSelected, setSecondCardSelected] = useState<{name: string, number: number | undefined}>({
    name: '',
    number: undefined
  })

  useEffect(() => {
    setCards(data.slice(0, levelNumber[level]).sort(() => { return Math.random() - 0.5 }))
  }, [])

  useEffect(() => {
    checkIfCardsMatched()
  }, [secondCardSelected])

  const handleFlipCard = (name: string, number: number) => {
    if (firstCardSelected.name === name && firstCardSelected.number === number) {
      return 0
    }
    if (!firstCardSelected.name) {
      setFirstCardSelected({ name, number })
    } else if (!secondCardSelected.name) {
      setAttempts(attempts + 1)
      setSecondCardSelected({ name, number })
    }
    return 1
  }

  const checkIfCardsMatched = () => {
    if (firstCardSelected.name && secondCardSelected.name) {
      firstCardSelected.name === secondCardSelected.name ?
      disabledCardsFunction() : unFlipCardsFunction()
    }
  }

  const disabledCardsFunction = () => {
    setDisabledCards([firstCardSelected.number, secondCardSelected.number])
    setFoundPairs(foundPairs + 1)
    resetCards()
  }

  const unFlipCardsFunction = () => {
    setUnflippedCards([firstCardSelected.number, secondCardSelected.number])
    resetCards()
  }

  const resetCards = () => {
    setFirstCardSelected({
      name: '',
      number: firstCardSelected.number,
    })
    setSecondCardSelected({
      name: '',
      number: secondCardSelected.number,
    })
  }

  if (foundPairs === levelNumber[level] / 2) {
    setTimeout(() => {
      setStateGame(2)
    }, 700)
  }

  return (
    <S.BoardContainer {...{ setStateGame, level, levelNumber }}>
      <S.BoardInformation>
        <S.Info>
          Movimientos: <span>{attempts}</span>
        </S.Info>
        <S.Info>
          Pares a encontrar: <span>{levelNumber[level] / 2}</span>
        </S.Info>
        <S.Info>
          Pares encontrados: <span>{foundPairs}</span>
        </S.Info>
      </S.BoardInformation>
      <S.BoardGame>
        {
          cards.map(({ name, frontFace, id}) => (
            <Card key={id} {...{name, frontFace, id, handleFlipCard, unFlippedCards, disabledCards }} />
          ))
        }
      </S.BoardGame>
    </S.BoardContainer>
  )
}

export default Board
