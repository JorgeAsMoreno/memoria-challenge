import React, { useState } from "react";
import { ICard } from "./Card.interface";
import backFace from '../../assets/images/cover.png'
import ReactCardFlip from "react-card-flip";
import * as S from './card.styles'

const Card: React.FC<ICard> = ({ frontFace, name, id }) => {
  const [isFlipped, setisFlipped] = useState<boolean>(false)
  return (
    <S.CardContainer>

      <ReactCardFlip {...{isFlipped}}>
        <img src={backFace} alt={name} className="card-image" />
        <img src={frontFace} alt={name} className="card-image"  />
      </ReactCardFlip>
    </S.CardContainer>
  )
}

export default Card