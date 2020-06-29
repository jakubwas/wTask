// Dependencies
import React, { Fragment } from "react";
import styled from "styled-components";
// React Components
import SubmitTaskButton from "./SubmitTaskButton";
import FormInput from "./FormInput";
import FormPriority from "./FormPriority";

const Form = styled.form`
  width: 100%;
  margin-top: 1.6rem;
`;
const InputAndPriorityContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TodoForm = () => {
  return (
    <Fragment>
      <Form>
        <InputAndPriorityContainer>
          <FormInput />
          <FormPriority />
        </InputAndPriorityContainer>
        <SubmitTaskButton />
      </Form>
    </Fragment>
  );
};

export default TodoForm;
