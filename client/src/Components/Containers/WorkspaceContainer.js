// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 30rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WorkspaceContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default WorkspaceContainer;
