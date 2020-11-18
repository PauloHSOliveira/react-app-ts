import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Container, Content } from './styles';

const pages: React.FC = () => {
  const colors = {
    primary: '#000',
    secondary: '#bfbfbf',
  };

  return (
    <ThemeProvider theme={colors}>
      <Container>
        <Content>
          <h1>teste</h1>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default pages;
