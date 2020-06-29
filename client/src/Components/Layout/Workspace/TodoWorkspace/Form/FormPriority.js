// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React Components
import PriorityButton from "./PriorityButton";
import TodoContext from "../../../../../Context/todo/todoContext";

const PriorityContainer = styled.div`
  border: 1px solid black;
  height: 3.9rem;
  padding: 0.3rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.28);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`;

const FormPriority = () => {
  const todoContext = useContext(TodoContext);

  const { taskPriority } = todoContext;

  return (
    <PriorityContainer>
      <span style={{ marginRight: "1rem" }}>Priority</span>
      {/* Priority : Low */}
      {taskPriority > 0 ? (
        <PriorityButton fill="blue" priorityValue={1} />
      ) : (
        <PriorityButton fill="rgba(0, 0, 0, 0.15)" priorityValue={1} />
      )}
      {/* Priority : Medium */}
      {taskPriority > 1 ? (
        <PriorityButton fill="blue" priorityValue={2} />
      ) : (
        <PriorityButton fill="rgba(0, 0, 0, 0.15)" priorityValue={2} />
      )}
      {/* Priority : High */}
      {taskPriority > 2 ? (
        <PriorityButton fill="blue" priorityValue={3} />
      ) : (
        <PriorityButton fill="rgba(0, 0, 0, 0.15)" priorityValue={3} />
      )}
    </PriorityContainer>
  );
};

export default FormPriority;
