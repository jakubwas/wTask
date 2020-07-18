// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";

const ButtonsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;
const SubmitButton = styled.button`
  width: 10rem;
  font-size: 1.3rem;
  padding: 1rem 0.7rem;
  border: none;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  background: ${(props) => props.bg};
  cursor: pointer;
  outline: none;
`;
const ClearButton = styled.button`
  cursor: pointer;
  margin-left: 0.5rem;
  border: none;
  background: white;
  font-weight: 500;
  padding: 0 0.5rem;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
`;
const FormButtons = () => {
  const todoContext = useContext(TodoContext);

  const { taskPriority, currentInputValue, clearForm } = todoContext;

  return (
    <ButtonsContainer>
      {currentInputValue.length > 0 ? (
        <SubmitButton type="submit" bg={"rgba(26, 38, 57, 1)"}>
          Add Task
        </SubmitButton>
      ) : (
        <SubmitButton type="button" bg={"rgba(26,38,57, 0.3)"}>
          Add Task
        </SubmitButton>
      )}
      {(currentInputValue.length > 0 || taskPriority > 0) && (
        <ClearButton type="button" onClick={clearForm}>
          Clear
        </ClearButton>
      )}
    </ButtonsContainer>
  );
};

export default FormButtons;
