import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 
    font-family: 'Roboto', sans-serif;
    transition: all 0.5s linear;
  }
  .container {
    position: relative;
  }

  .page {
    position: absolute;
    left: 15px;
    right: 15px;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export const LightTheme = {
  body: "#f7f7f7",
  text: "#333",
  boxShadow: "rgb(0 0 0 / 15%) 0px 5px 9px 0px;",
};

export const DarkTheme = {
  body: "#333",
  text: "#fff",
  boxShadow: "rgb(0 0 0 / 20%) 0px 9px 9px 5px;",
};
