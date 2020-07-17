// Dependencies
import React, { Fragment, useContext } from "react";
import styled from "styled-components";
// React Components
import FormButtons from "./FormButtons";
import FormPriority from "./FormPriority";
// Context API
import TodoContext from "../../../../../Context/todo/todoContext";

const Form = styled.form`
  width: 100%;
  margin-top: 1.6rem;
`;
const InputAndPriorityContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 3.9rem;
  padding: 0.3rem 1rem;
  font-size: 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.28);
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
`;

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const {
    getCurrentInputValue,
    addNewTask,
    clearForm,
    currentInputValue,
  } = todoContext;

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onInputChangeHandler = (e) => {
    getCurrentInputValue(e.target.value);
  };

  return (
    <Fragment>
      <Form
        onSubmit={(e) => {
          onSubmitHandler(e);
          addNewTask();
          clearForm();
        }}
      >
        <InputAndPriorityContainer>
          <Input
            onChange={(e) => {
              onInputChangeHandler(e);
            }}
            value={currentInputValue}
            placeholder="e.g. Hit a gym"
          />
          <FormPriority />
        </InputAndPriorityContainer>
        <FormButtons />
      </Form>
    </Fragment>
  );
};

export default TodoForm;
