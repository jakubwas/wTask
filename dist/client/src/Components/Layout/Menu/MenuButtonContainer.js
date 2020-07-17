// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const ButtonContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1.3rem;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: rgba(255, 255, 255, 1);
  border-top: ${(props) => props.btop};
  border-bottom: ${(props) => props.bbottom};
  transform: translateY(${(props) => props.tranY});
  cursor: pointer;

  &:hover {
    background: rgba(26, 38, 57, 0.8);
    position: relative;
  }
`;
// React Component
const MenuButtonContainer = (props) => {
  return (
    <ButtonContainer
      tranY={props.tranY}
      btop={props.btop}
      bbottom={props.bbottom}
    >
      {props.children}
    </ButtonContainer>
  );
};

export default MenuButtonContainer;
