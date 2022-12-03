import styled from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: 2em;
  color: #fff;
  border: 6px solid #fff;
  cursor: pointer;
  font-size: 1.25em;
  margin:  0 0 2em 0;
  padding: 1em 4em;
  transition: .3s;
  z-index: 99;

  &:hover {
    color: #000;
    background: #fff;
    transform: scale(1.1) skew(-9deg, 0deg);
  }
`