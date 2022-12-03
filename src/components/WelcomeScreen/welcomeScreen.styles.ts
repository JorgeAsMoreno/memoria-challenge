import styled from "styled-components"
import { rotate, titleGradient } from "../../utils/animations.styles"
import monitor from '../../assets/images/monitor.png'
import keyboard from '../../assets/images/keyboard.png'
export const WelcomeScreenContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 1em;
  text-align: center;

  &:before {
    animation: ${rotate} 10s ease infinite;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${monitor});
    content: "";
    display: block;
    height: 26em;
    left: -9em;
    position: absolute;
    transform: rotate(45deg);
    top: -5em;
    width: 26em;
  }

  &:after {
    animation: ${rotate} 10s ease infinite;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${keyboard});
    bottom: -1em;
    content: "";
    display: block;
    height: 26em;
    position: absolute;
    right: -9em;
    width: 26em;
  }
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