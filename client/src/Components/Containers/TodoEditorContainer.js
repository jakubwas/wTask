// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  max-width: 90rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoEditorContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default TodoEditorContainer;
