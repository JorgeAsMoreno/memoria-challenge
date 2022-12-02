import React, { useState } from 'react'
import styled from 'styled-components'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'

const Wrapper = styled.div`
  align-items: center;
  background: #0f0f19;
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const App: React.FC = () => {
  const [level, setLevel] = useState(0)

  //Cambiar dificultad
  const changeLevel = () => {
    setLevel(level === 2 ? 0 : level + 1)
  }

  return (
    <Wrapper>
      <WelcomeScreen {...{level, changeLevel}} />
    </Wrapper>
  );
}

export default App;
