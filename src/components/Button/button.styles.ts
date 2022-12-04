import styled from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: 2em;
  color: var(--button);
  border: 6px solid var(--borderButton);
  cursor: pointer;
  font-size: 1.25em;
  font-weight: bolder;
  margin:  0 0 2em 0;
  padding: 1em 4em;
  transition: .3s;
  z-index: 99;

  &:hover {
    color: var(--hoverButtonColor);
    background: var(--hoverButtonBg);
    transform: scale(1.1) skew(-9deg, 0deg);
  }
`