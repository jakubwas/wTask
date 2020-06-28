// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import SubmitTaskButton from "./SubmitTaskButton";
import FormInput from "./FormInput";
import FormPriority from "./FormPriority";

const Form = styled.form`
  width: 100%;
  height: 10rem;
  margin-top: 1.6rem;
`;
const InputAndPriorityContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TodoForm = () => {
  return (
    <Form>
      <InputAndPriorityContainer>
        <FormInput />
        <FormPriority />
      </InputAndPriorityContainer>
      <SubmitTaskButton />
    </Form>
  );
};

export default TodoForm;
