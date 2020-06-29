// Dependencies
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
`;

const TaskContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default TaskContainer;
