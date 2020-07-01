// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";

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
  const todoContext = useContext(TodoContext);
  const { deleteSingleTask } = todoContext;

  const onClickHandler = () => {
    switch (props.onClickedHandlerData.actionType) {
      case "delete":
        deleteSingleTask(props.onClickedHandlerData._id);
        break;
      case "update":
        console.log("Update");
        break;
      default:
        break;
    }
  };

  return (
    <Container opacity={props.opacity} onClick={onClickHandler}>
      {props.children}
    </Container>
  );
};

export default TaskButtonContainer;
