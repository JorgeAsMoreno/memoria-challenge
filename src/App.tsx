import React, { useState } from 'react'
import styled from 'styled-components'
import Board from './components/Board/Board'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import WinScreen from './components/WinScreen/WinScreen'
import moon from './assets/icons/moon.svg'
import sun from './assets/icons/sun.svg'
const Wrapper = styled.div`
  align-items: center;
  background: var(--background);
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

export const SwitchThemeButton = styled.button`
  background: #fff;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 2em;
  right: 2em;
  z-index: 999;

  img {
    width: 4em;
  }
`

export const App: React.FC = () => {
  const [stateGame, setStateGame] = useState(0)
  const [theme, setTheme] = useState<string>('light')

  //start game, 0 is not started, 1 in progress, 2 finished
  const changeStateGame = (value: number): void => {
    setStateGame(value)
  }

  const handleSwitchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Wrapper data-theme={theme}>
      <SwitchThemeButton>
      <img
          alt={`icon-${theme}`}
          onClick={handleSwitchTheme}  
          src={theme === 'light' ? moon : sun}
        />
      </SwitchThemeButton>
      {
        stateGame === 0 ?
        <WelcomeScreen setStart={changeStateGame} /> : null
      }
      {
        stateGame === 1 ?
        <Board {...{setStateGame}} /> : null
      }
      {
        stateGame === 2 ?
        <WinScreen {...{setStateGame}} /> : null
      }
    </Wrapper>
  );
}

export default App;
