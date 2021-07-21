import { Link } from "react-router-dom";
import styled from "styled-components";

export const VoitureCardContainer = styled.div`
  background-color: var(--bs-primary);
  box-shadow: 0 0 4px #474646;
  color: var(--bs-white);
  text-align: center;
  position: relative;
  border-radius: 10px;
  height: 100%;
  padding: 5px;
  margin-top: 35px;
  transition: ease 0.3s all;

  &:hover {
    transform: scale(1.02);
  }
`;

export const VoitureCardName = styled(Link)`
  color: var(--bs-white);
  text-decoration: none;

  &:hover {
    color: var(--bs-white);
  }
`;

export const VoitureCardImg = styled.img`
  object-fit: cover;
  height: 200px;
  background-color: var(--bs-primary);
`;

export const VoitureCardColor = styled.div``;

export const VoitureCardPrice = styled.div`
  position: absolute;
  top: -25px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: fit-content;
  background-color: var(--bs-info);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 2px #474646;
  font-weight: bold;
`;