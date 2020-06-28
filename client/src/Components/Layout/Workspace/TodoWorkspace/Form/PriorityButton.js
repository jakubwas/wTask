// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import PriorityIcon from "./PriorityIcon";

const Button = styled.button`
  padding: 0.2rem;
  margin: 0 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  outline: none;
  border: none;
  cursor: pointer;
`;

const PriorityButton = () => {
  return (
    <Button>
      <PriorityIcon />
    </Button>
  );
};

export default PriorityButton;
