import React from 'react';
import styled from 'styled-components';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

const Wrapper = styled.div`
  align-items: center;
  background: #0f0f19;
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const App: React.FC = () => {
  return (
    <Wrapper>
      <WelcomeScreen />
    </Wrapper>
  );
}

export default App;
