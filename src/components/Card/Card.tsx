import React, { useState, useEffect } from "react";
import backFace from '../../assets/images/cover.png'
import ReactCardFlip from "react-card-flip";
import * as S from './card.styles'
import { ICard } from "./card.interface";

const Card: React.FC<ICard> = ({ frontFace, name, id, handleFlipCard, unFlippedCards, disabledCards }) => {
  const [isFlipped, setisFlipped] = useState<boolean>(false)
  const [hasEvent, setHasEvent] = useState<boolean>(true)
  const handleImageClick = () => {
    const value = handleFlipCard(name, id)
    value !== 0 && setisFlipped(prev => !prev)
  }

  useEffect(() => {
    if (unFlippedCards.includes(id)) {
      setTimeout(() => {
        setisFlipped(false)
      }, 500)
    }
  }, [unFlippedCards])

  useEffect(() => {
    if (disabledCards.includes(id)) {
      setHasEvent(false)
    }
  }, [disabledCards])

  return (
    <S.CardContainer className={!hasEvent ? 'disabled-card' : ''}>
      <ReactCardFlip {...{isFlipped}}>
        <S.Image src={backFace} alt={`${name}-back-face`} onClick={hasEvent ? handleImageClick : undefined} />
        <S.Image src={frontFace} alt={`${name}-front-face`} onClick={hasEvent ? handleImageClick : undefined} />
      </ReactCardFlip>
    </S.CardContainer>
  )
}

export default Card