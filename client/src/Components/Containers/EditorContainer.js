// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.div`
  margin-left: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// React-Component
const EditorContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default EditorContainer;
