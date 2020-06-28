// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SubmitTaskButton from "./SubmitTaskButton";

const Form = styled.form`
  width: 100%;
  height: 10rem;
  margin-top: 1.6rem;
  border: 1px solid black;
`;
const InputAndPriorityContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  width: 70%;
  background: red;
  height: 2rem;
`;
const PriorityContainer = styled.div`
  width: 30%;
  background: blue;
  height: 2rem;
`;

const TodoForm = () => {
  return (
    <Form>
      <InputAndPriorityContainer>
        <Input />
        <PriorityContainer />
      </InputAndPriorityContainer>
      <SubmitTaskButton />
    </Form>
  );
};

export default TodoForm;
