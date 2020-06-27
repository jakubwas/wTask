import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 95vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

const AppContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default AppContainer;
