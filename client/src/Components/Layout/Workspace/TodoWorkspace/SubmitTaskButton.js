import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 12rem;
  font-size: 1.5rem;
  padding: 0.5rem 1.6rem;
  border: 1px solid black;
  background: white;
  margin-top: 1.5rem;
`;

const SubmitTaskButton = () => {
  return <SubmitButton>Add Task</SubmitButton>;
};

export default SubmitTaskButton;
