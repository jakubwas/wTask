// Dependences
import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 4.3rem;
`;

const AppContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppContainer;
