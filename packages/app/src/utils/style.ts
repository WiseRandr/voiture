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

  .rotate-half {
    transform: rotateY(180deg);
  }

  .carousel-root {
    border-radius: 15px;
  }

  .carousel.carousel-slider .control-arrow {
    background-color: var(--bs-info);
    opacity: 1;
    height: fit-content;
    margin: auto 10px;
    border-radius: 1000px;
    height: 30px;
    width: 30px;
    padding: 0;
    padding-right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px #2c2c2c;
    cursor: pointer;
  }
`;