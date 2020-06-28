// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 7vh;
  background: #d9dad7;
  overflow: hidden;
  position: fixed;
  top: 4.3rem;
  left: 0;
`;

const MenuContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MenuContainer;
