import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 10rem;
  font-size: 1.3rem;
  padding: 1rem 0.7rem;
  border: none;
  font-weight: 600;
  color: white;
  border-radius: 5px;
  background: rgba(26, 38, 57, 1);
  margin-top: 1.5rem;
  cursor: pointer;
  outline: none;
`;

const SubmitTaskButton = () => {
  return <SubmitButton>Add Task</SubmitButton>;
};

export default SubmitTaskButton;
