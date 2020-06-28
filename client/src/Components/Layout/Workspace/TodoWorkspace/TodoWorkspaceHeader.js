import React from "react";
import styled from "styled-components";

const Header = styled.div`
  font-size: 2rem;
  font-weight: 800;
  align-self: flex-start;
`;

const TodoWorkspaceHeader = () => {
  return <Header>Todo List</Header>;
};

export default TodoWorkspaceHeader;
