// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid black;
`;

const TaskContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default TaskContainer;
