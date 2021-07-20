import styled from "styled-components";

export const LogoImg = styled.img`
  background-color: #fff;
  border-radius: 10000px;
  padding: 3px;
  box-shadow: 0 0 6px #262626;
  transition: ease all 0.5s;

  &:hover {
    transform: rotateZ(360deg) scale(1.05);
  }

  &.logo-loading {
    animation: rotate 1s infinite linear;

    @keyframes rotate {
      0% {
        transform: rotateZ(0deg) scale(1);
      }
      50% {
        transform: rotateZ(180deg) scale(1.08);
      }
      100% {
        transform: rotateZ(360deg) scale(1);
      }
    }
  }
`;