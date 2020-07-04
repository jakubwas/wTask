// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.ul`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  background: rgba(54, 71, 79, 1);
  overflow: hidden;
  position: fixed;
  top: 4.3rem;
  left: 0;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.9);
`;
// React-Component
const MenuContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MenuContainer;
