// Dependencies
import React from "react";
import styled from "styled-components";
// Styled-Components
const Header = styled.div`
  font-size: 2rem;
  font-weight: 800;
  align-self: flex-start;
`;
// React Component
const TodoWorkspaceHeader = () => {
  return <Header>Todo List</Header>;
};

export default TodoWorkspaceHeader;
