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
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-style: italic;
  cursor: pointer;
  border-top: 2px solid #dee1ec;
  border-bottom: 2px solid #dee1ec;
  transform: translateY(${(props) => props.tranY});

  &:hover {
    border-top: 2px solid #083358;
    border-bottom: 2px solid #083358;
    position: relative;
    z-index: 11;
  }
`;

const LeftSidebarBtnContainer = (props) => {
  return (
    <ButtonContainer tranY={props.tranY}>{props.children}</ButtonContainer>
  );
};

export default LeftSidebarBtnContainer;
