// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 7vh;
  background: #36474f;
  overflow: hidden;
  position: fixed;
  top: 4.3rem;
  left: 0;
  box-shadow: 1px 3px 5px 5px rgba(0, 0, 0, 0.9);
`;

const MenuContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MenuContainer;
