// Dependencies
import React, { useState } from "react";
import styled from "styled-components";
// React Components
import CheckBoxButton from "./CheckBoxButton";
import EditButton from "./EditButton";
import TrashButton from "./TrashButton";

const TaskContainer = styled.div`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
`;

const TextContainer = styled.div`
  width: 100%;
  font-size: 1.4rem;
  margin: 1.2rem 2.5rem 1.2rem 0;
  line-height: 2rem;
  text-decoration: ${(props) => props.tdecoration};
`;

const Task = ({ task }) => {
  const [taskBtnsOpacity, setTaskBtnsOpacity] = useState(0);
  return (
    <TaskContainer
      onMouseEnter={() => {
        setTaskBtnsOpacity(1);
      }}
      onMouseLeave={() => {
        setTaskBtnsOpacity(0);
      }}
    >
      <CheckBoxButton
        id={task._id}
        priority={task.priority}
        status={task.status}
      />
      {task.status === "completed" ? (
        <TextContainer tdecoration="line-through">{task.name}</TextContainer>
      ) : (
        <TextContainer>{task.name}</TextContainer>
      )}

      {task.status === "uncompleted" && (
        <EditButton opacity={taskBtnsOpacity} id={task._id} />
      )}

      <TrashButton opacity={taskBtnsOpacity} id={task._id} />
    </TaskContainer>
  );
};

export default Task;
