import React, { useContext } from "react";
import styled from "styled-components";

import LeftSidebar from "../Layout/LeftSidebar";
import ContentContainer from "./ContentContainer";

import MenuContext from "../../Context/menuContext";

const Container = styled.div`
  height: 95vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

const AppContainer = (props) => {
  const menuContext = useContext(MenuContext);
  const { showLeftSidebar } = menuContext;

  return (
    <Container>
      {showLeftSidebar && <LeftSidebar />}
      <ContentContainer />
    </Container>
  );
};

export default AppContainer;
