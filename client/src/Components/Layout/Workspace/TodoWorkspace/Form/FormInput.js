import React from "react";
import styled from "styled-components";

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

const FormInput = () => {
  return <Input placeholder="e.g. Hit a gym" />;
};

export default FormInput;
