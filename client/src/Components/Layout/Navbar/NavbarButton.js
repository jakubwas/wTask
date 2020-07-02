// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Button = styled.button`
  background: rgba(26, 38, 57, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0.6rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
// React Component
const NavbarButton = (props) => {
  return <Button onClick={props.onClickHandler}>{props.children}</Button>;
};

export default NavbarButton;
