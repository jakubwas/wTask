// Dependencies
import React, { useContext, Fragment } from "react";
import styled from "styled-components";
// React Components
import StatusSectionHeader from "./StatusSectionHeader";
import Task from "./Task";
import EmptyTaskListInfo from "./EmptyTaskListInfo";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";
// Styled-Components
const Container = styled.div`
  width: 100%;
`;
// React Component
const UncompletedTasks = () => {
  const todoContext = useContext(TodoContext);
  const { tasks } = todoContext;

  return (
    <Container>
      <StatusSectionHeader>Uncompleted Tasks</StatusSectionHeader>
      {tasks.length > 0 &&
      tasks.find((task) => task.status === "uncompleted") ? (
        <Fragment>
          {tasks.map((task) => {
            if (task.status === "uncompleted") {
              return <Task key={task._id} task={task} />;
            }
          })}
        </Fragment>
      ) : (
        <EmptyTaskListInfo>
          Looks like everything's organized in the right place.
        </EmptyTaskListInfo>
      )}
    </Container>
  );
};

export default UncompletedTasks;
