// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.ul`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(222, 222, 222, 0.4);
  overflow: hidden;
  position: fixed;
  top: 4.3rem;
  left: 0;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(200, 200, 200, 0.8);
`;
// React-Component
const MenuContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MenuContainer;
