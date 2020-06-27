import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 95vh;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 5rem;
  background: rgba(0, 0, 0, 0.03);
`;

const LeftSidebarContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default LeftSidebarContainer;
