import { keyframes } from "styled-components";

export const titleGradient = keyframes`
  0% {
    color: #cf59e6;
  }

  50% {
    color: #6bc5f8;
  }

  100% {
    color: #cf59e6;
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(25deg)
  }
  100% {
    ransform: rotate(50deg)
  }
`;

export const fall = keyframes`
  0% {top:-110px; transform: rotate(0deg) rotateY(-90deg); opacity:1;}
  100% {top:900px; transform: rotate(360deg) rotateY(180deg); opacity:0.7;}
`

export const fall2 = keyframes`
  0% {top:-110px; transform: rotate(0deg) rotateY(90deg); opacity:1;}
  100% {top:900px; transform: rotate(-360deg) rotateY(-180deg); opacity:0.5;}
`