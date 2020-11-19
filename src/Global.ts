import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Oxygen', sans-serif;
  }`;

export default GlobalStyles;
