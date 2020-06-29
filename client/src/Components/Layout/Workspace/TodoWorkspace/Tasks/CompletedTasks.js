// Dependencies
import React from "react";
import styled from "styled-components";
// React Components
import StatusSectionHeader from "./StatusSectionHeader";

const Container = styled.div`
  width: 100%;
`;

const UncompletedTasks = () => {
  return (
    <Container>
      <StatusSectionHeader>Completed Tasks</StatusSectionHeader>
    </Container>
  );
};

export default UncompletedTasks;
