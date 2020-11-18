import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './Global';

import Main from './pages/Main';

function App() {
  const colors = {
    primary: '#1c161c',
    secondary: '#fff',
    red: '#ff0c04',
    green: '#09f069',
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
