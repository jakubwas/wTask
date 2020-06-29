import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 3rem;
  height: 3rem;
  margin-top: 0.5rem;
  margin-left: 0.4rem;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${(props) => props.opacity};

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const TaskButtonContainer = (props) => {
  return <Container opacity={props.opacity}>{props.children}</Container>;
};

export default TaskButtonContainer;
