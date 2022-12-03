import styled from "styled-components";
import devices from "../../utils/devices";

export const CardContainer = styled.div`
  display: flex;
  margin: 1em 0;
  width: calc(250px - 10px);
  cursor: pointer;
  justify-content: center;;
  cursor: pointer;

  @media screen and ${devices.mobile} {
    width: 40%;
  }
`
  
export const Image = styled.img`
  height: calc(200px - 10px);
`