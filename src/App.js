import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle` 
   *{
     box-sizing: border-box;
   }
   `

function App() {
  return (
    <GlobalStyle />
    
  );
}

export default App;
