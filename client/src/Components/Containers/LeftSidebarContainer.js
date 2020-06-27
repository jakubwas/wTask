// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 7vh;
  background: rgba(12, 12, 12, 0.05);
  overflow: hidden;
  position: fixed;
  top: 6vh;
  left: 0;
`;

const LeftSidebarContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default LeftSidebarContainer;
