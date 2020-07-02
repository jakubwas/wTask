// Dependences
import React from "react";
import styled from "styled-components";
// Styled-Components
const Container = styled.div`
  display: flex;
  margin-top: 4.3rem;
`;
// React-Component
const AppContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppContainer;
