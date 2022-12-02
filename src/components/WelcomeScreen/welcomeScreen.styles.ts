import styled from "styled-components";
import { titleGradient } from "../../utils/animations.styles";

export const WelcomeScreenContainer = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  color: #fff;
  margin: 0 0 1em 0;
  font-size: 4em;
  font-weight: bolder;

  span {
    animation: ${titleGradient} 4s ease infinite;
  }
`

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
`