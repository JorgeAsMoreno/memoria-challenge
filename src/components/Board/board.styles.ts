import styled from "styled-components";
import devices from "../../utils/devices";
import { IBoard } from "./board.interface";

export const BoardContainer = styled.div<IBoard>`
  padding: 1em;
  position: relative;
  
  @media screen and ${devices.desktop} {
    height: ${props => props.level === 2 ? 'auto' : '110vh'};
  }
`

export const BoardInformation = styled.div`
  background: #fff;
  box-shadow: var(--boxShadow);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 2em;
  border-radius: 2em;
  padding: 1em;

  @media screen and ${devices.desktop} {
    flex-direction: row;
    margin: 4em;
  }
`

export const Info = styled.p`
  color: var(--color);
  font-size: 1.5em;
  margin: 0;

  @media screen and ${devices.desktop} {
    font-size: 2em;
  }
`

export const BoardGame = styled.div`
  box-shadow: var(--boxShadow);
  border-radius: 2em;
  margin-bottom: 4em;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 1em;

  @media screen and ${devices.mobile} {
    justify-content: space-between;
  }
  
  @media screen and ${devices.desktop} {
    padding: 2em;
    width: 1000px;
  }
`
