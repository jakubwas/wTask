// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import TaskContainer from "./TaskContainer";
import CheckBoxButton from "./CheckBoxButton";
import EditButton from "./EditButton";
import TrashButton from "./TrashButton";

const TextContainer = styled.div`
  width: 100%;
  font-size: 1.4rem;
  margin: 1.2rem 2.5rem 1.2rem 0;
  line-height: 2rem;
`;

const Task = () => {
  return (
    <TaskContainer>
      <CheckBoxButton />
      <TextContainer>Hit a gym</TextContainer>
      <EditButton />
      <TrashButton />
    </TaskContainer>
  );
};

export default Task;
