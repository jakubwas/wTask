import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #1a2639;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0.6rem;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NavbarButton = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default NavbarButton;
