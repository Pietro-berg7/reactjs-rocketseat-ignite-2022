import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-800"]};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["green-500"]};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme["gray-800"]};
  }
`;
