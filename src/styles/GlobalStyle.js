import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
  }
`;

export default GlobalStyle;
