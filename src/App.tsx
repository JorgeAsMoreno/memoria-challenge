import React, { useState } from 'react'
import styled from 'styled-components'
import Board from './components/Board/Board'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'

const Wrapper = styled.div`
  align-items: center;
  background: #0f0f19;
  display: flex;
  justify-content: center;
  height: 100vh;
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
        <Board /> : null
      }
    </Wrapper>
  );
}

export default App;
