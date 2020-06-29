// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React Components
import StatusSectionHeader from "./StatusSectionHeader";
import Task from "./Task";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";

const Container = styled.div`
  width: 100%;
`;

const UncompletedTasks = () => {
  const todoContext = useContext(TodoContext);
  const { tasks } = todoContext;
  return (
    <Container>
      <StatusSectionHeader>Uncompleted Tasks</StatusSectionHeader>
      {tasks.map((task) => {
        if (task.status === "uncompleted") {
          return <Task key={task.id} task={task} />;
        }
      })}
    </Container>
  );
};

export default UncompletedTasks;
