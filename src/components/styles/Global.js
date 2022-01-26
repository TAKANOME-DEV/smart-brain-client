import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --dark-color: hsl(235, 10%, 21%);
    --darker-color: hsl(240, 10%, 14%);
    --white-color: hsl(0, 0%, 100%);
    --lightWhite-color: hsl(0, 0%, 40%);
    --darkWhite-color: hsl(0, 0%, 90%);
    --blue-color: hsl(201, 82%, 36%);
    ${"" /* --blue-color: hsl(243, 86%, 67%); */}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--dark-color);
    color: var(--white-color); 
    font-family: 'Lato', sans-serif;
    transition: all 0.5s linear;
    font-size: 16px;
  }

  .container {
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 2rem;
  }
 
  button {
    font-size: 1.5rem;
    padding: .3rem 1.25rem;
    color: var(--dark-color);
    background-color: var(--white-color);
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    &:hover {
        background-color: var(--darkWhite-color);
    }
  }
`;

export default GlobalStyles;
