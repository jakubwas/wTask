// Dependencies
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1.3rem;
  margin-left: 0.5rem;
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  color: white;
  font-weight: 500;
  border-top: ${(props) => props.btop};
  border-bottom: ${(props) => props.bbottom};
  transform: translateY(${(props) => props.tranY});

  &:hover {
    /* border-top: 1px solid #083358;
    border-bottom: 1px solid #083358; */
    background: rgba(26, 38, 57, 0.8);
    position: relative;
    z-index: 11;
  }
`;

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
