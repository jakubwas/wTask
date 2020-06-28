// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// React Components
import PriorityIcon from "./PriorityIcon";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";

const Button = styled.button`
  padding: 0.2rem;
  margin: 0 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  outline: none;
  border: none;
  cursor: pointer;
`;

const PriorityButton = ({ fill, priorityValue }) => {
  const todoContext = useContext(TodoContext);

  const { updateTaskPriority } = todoContext;

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        updateTaskPriority(priorityValue);
      }}
    >
      <PriorityIcon fill={fill} />
    </Button>
  );
};

export default PriorityButton;
