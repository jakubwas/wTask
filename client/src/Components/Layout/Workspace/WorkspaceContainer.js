// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.div`
  width: 80%;
  max-width: 90rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// React Component
const WorkspaceContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default WorkspaceContainer;
