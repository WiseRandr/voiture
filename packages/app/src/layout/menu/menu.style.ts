import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--bs-white);
  transition: ease 0.3s all;
  padding: 8px 0;
  border-radius: 10px;
  margin-bottom: 12px;
  
  &:hover, &.active {
    color: var(--bs-white);
    background-color: var(--bs-info);
    box-shadow: 0 0 3px #494949;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const MenuIcon = styled.div``;

export const MenuText = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;