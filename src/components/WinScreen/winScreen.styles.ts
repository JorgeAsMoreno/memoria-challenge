import styled from "styled-components";
import { fall, fall2 } from "../../utils/animations.styles";

export const WinContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  .confetti {
    position: absolute;
    display: flex;
    width: 10px;
    height: 25px;
    top: -100px;
  }
  
  .confetti:nth-child(1) {
    background-color: var(--blue);
    animation: ${fall} 2.5s linear infinite;
    left: 10%;
  }
  
  .confetti:nth-child(2) {
    background-color: var(--green);
    animation: ${fall} 2.3s linear infinite .2s;
    left: 20%;
  }
  
  .confetti:nth-child(3) {
    background-color: var(--pink);
    animation: ${fall} 2.4s linear infinite .4s;
    left: 30%;
  }
  
  .confetti:nth-child(4) {
    background-color: var(--purple);
    animation: ${fall} 2.7s linear infinite .1s;
    left: 40%;
  }
  
  .confetti:nth-child(5) {
    background-color: var(--yellow);
    animation: ${fall} 2.6s linear infinite .7s;
    left: 50%;
  }
  
  .confetti:nth-child(6) {
    background-color: var(--blue);
    animation: ${fall} 2.4s linear infinite .2s;
    left: 60%;
  }
  
  .confetti:nth-child(7) {
    background-color: var(--green);
    animation: ${fall} 2.1s linear infinite .7s;
    left: 70%;
  }
  
  .confetti:nth-child(8) {
    background-color: var(--pink);
    animation: ${fall} 2.4s linear infinite .9s;
    left: 80%;
    }
  
  .confetti:nth-child(9) {
    background-color: var(--purple);
    animation: ${fall} 2.9s linear infinite .9s;
    left: 90%;
  }
  
  .confetti:nth-child(10) {
    background-color: var(--yellow);
    animation: ${fall} 2.2s linear infinite 1.1s;
    left: 100%;
  }
  
  .confetti:nth-child(11) {
    background-color: var(--blue);
    animation: ${fall2} 2.5s linear infinite;
    left: 95%;
    }
  
  .confetti:nth-child(12) {
    background-color: var(--green);
    animation: ${fall2} 2.3s linear infinite 1.1s;
    left: 85%;
  }
  
  .confetti:nth-child(13) {
    background-color: var(--pink);
    animation: ${fall2} 2.4s linear infinite 1.2s;
    left: 75%;
  }
  
  .confetti:nth-child(14) {
    background-color: var(--purple);
    animation: ${fall2} 2.7s linear infinite 1.3s;
    left: 65%;
  }
  
  .confetti:nth-child(15) {
    background-color: var(--yellow);
    animation: ${fall2} 2.6s linear infinite 1.4s;
    left: 55%;
  }
  
  .confetti:nth-child(16) {
    background-color: var(--blue);
    animation: ${fall2} 2.4s linear infinite 1.5s;
    left: 45%;
  }
  
  .confetti:nth-child(17) {
    background-color: var(--green);
    animation: ${fall2} 2.1s linear infinite 1.6s;
    left: 35%;
  }
  
  .confetti:nth-child(18) {
    background-color: var(--pink);
    animation: ${fall2} 2.4s linear infinite 1.7s;
    left: 25%;
  }
  
  .confetti:nth-child(19) {
    background-color: var(--purple);
    animation: ${fall2} 2.9s linear infinite 1.8s;
    left: 15%;
  }
  
  .confetti:nth-child(20) {
    background-color: var(--yellow);
    animation: ${fall2} 2.2s linear infinite 1.9s;
    left: 5%;
  }
  
  .confetti:nth-child(21) {
    background-color: var(--blue);
    animation: ${fall} 2.5s linear infinite;
    left: 3%;
  }
  
  .confetti:nth-child(22) {
    background-color: var(--green);
    animation: ${fall} 2.3s linear infinite 1.3s;
    left: 13%;
  }
  
  .confetti:nth-child(23) {
    background-color: var(--pink);
    animation: ${fall} 2.4s linear infinite 1.4s;
    left: 23%;
  }
  
  .confetti:nth-child(24) {
    background-color: var(--purple);
    animation: ${fall} 2.7s linear infinite 1.5s;
    left: 33%;
  }
  
  .confetti:nth-child(25) {
    background-color: var(--yellow);
    animation: ${fall} 2.6s linear infinite 1.6s;
    left: 43%;
  }  
`

export const ConfettiContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 60px;
  position: absolute;
  width: 100%;
  z-index: 0;
`

export const Title = styled.h2`
  color: var(--color);
  font-size: 4em;
`

export const Image = styled.img`
  height: 30em;
`
