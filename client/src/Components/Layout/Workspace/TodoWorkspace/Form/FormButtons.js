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
  background: rgba(26, 38, 57, 1);
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

  const { clearForm } = todoContext;

  return (
    <ButtonsContainer>
      <SubmitButton type="submit">Add Task</SubmitButton>
      <ClearButton type="button" onClick={clearForm}>
        Clear
      </ClearButton>
    </ButtonsContainer>
  );
};

export default FormButtons;
