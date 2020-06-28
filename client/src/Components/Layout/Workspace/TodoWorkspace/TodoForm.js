// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SubmitTaskButton from "./SubmitTaskButton";

const Form = styled.form`
  width: 100%;
  height: 10rem;
  margin-top: 1.6rem;
`;
const InputAndPriorityContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  width: 70%;
  height: 3.3rem;
  font-size: 1.4rem;
  padding: 2rem 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.28);
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
`;
const PriorityContainer = styled.div`
  width: 30%;
  border: 1px solid black;
  height: 3.3rem;
`;

const TodoForm = () => {
  return (
    <Form>
      <InputAndPriorityContainer>
        <Input placeholder="e.g. Hit a gym" />
        <PriorityContainer />
      </InputAndPriorityContainer>
      <SubmitTaskButton />
    </Form>
  );
};

export default TodoForm;
