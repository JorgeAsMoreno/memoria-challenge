import React, { useState } from 'react'
import styled from 'styled-components'
import Board from './components/Board/Board'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import WinScreen from './components/WinScreen/WinScreen'

const Wrapper = styled.div`
  align-items: center;
  background: #0f0f19;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

export const App: React.FC = () => {
  const [stateGame, setStateGame] = useState(0)

  //start game, 0 is not started, 1 in progress, 2 finished
  const changeStateGame = (value: number): void => {
    setStateGame(value)
  }

  return (
    <Wrapper>
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
        <WinScreen /> : null
      }
    </Wrapper>
  );
}

export default App;
