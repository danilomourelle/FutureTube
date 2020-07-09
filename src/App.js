import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/header';
import HeroImg from './components/heroImage';

const GlobalStyle = createGlobalStyle` 
  *{
    box-sizing: border-box;
    margin:0;
  }
  body{
    width:100%;
    background-color: #e0e0e0
  }
`

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-flow: column nowrap;
`

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Header />
      <HeroImg />
    </PageWrapper>
  );
}

export default App;
