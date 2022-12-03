import styled from "styled-components";
import devices from "../../utils/devices";

export const BoardContainer = styled.div`
  padding: 1em;
`

export const BoardInformation = styled.div`
  background: #fff;
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
  color: #000;
  font-size: 1.5em;
  margin: 0;

  @media screen and ${devices.desktop} {
    font-size: 2em;
  }
`

export const BoardGame = styled.div`
  margin-bottom: 4em;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;

  @media screen and ${devices.mobile} {
    justify-content: space-between;
  }
  
  @media screen and ${devices.desktop} {
    width: 1000px;
  }
`
