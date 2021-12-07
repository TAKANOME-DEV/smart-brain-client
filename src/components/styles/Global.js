import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #2F303A;
    color: #fff; 
    font-family: 'Lato', sans-serif;
    transition: all 0.5s linear;
  }
 
`;

export default GlobalStyles;
