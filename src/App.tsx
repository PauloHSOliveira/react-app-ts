import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Global';

import Main from './pages/Main';

function App() {
  const colors = {
    primary: '#1c161c',
    secondary: '#fff',
    red: '#d41010',
    green: '#0c942e',
  };

  return (
    <>
      <Reset />
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
