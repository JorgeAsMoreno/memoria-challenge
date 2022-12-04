import styled from "styled-components";
import devices from "../../utils/devices";

export const CardContainer = styled.div`
  align-items: center;
  display: flex;
  margin: .2em 0;
  width: calc(250px - 10px);
  cursor: pointer;
  justify-content: center;;
  cursor: pointer;
  padding: 0.5em 0;
  
  &.disabled-card {
    div.react-card-back {
      opacity: .5;
    }
  }

  @media screen and ${devices.mobile} {
    width: 40%;
  }
`
  
export const Image = styled.img`
  height: calc(200px - 10px);
`
