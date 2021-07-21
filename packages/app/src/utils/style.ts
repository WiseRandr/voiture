import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle``;

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    border-radius: 8px;
    outline: none;
    border: unset;
    padding: 3px 5px;
  }
`;