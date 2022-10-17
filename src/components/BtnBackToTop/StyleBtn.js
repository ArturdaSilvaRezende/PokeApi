import styled from "styled-components";

export const ComponentBtn = styled.button`
  position: fixed;
  bottom: 0;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    right: 5px;
  }
`;
