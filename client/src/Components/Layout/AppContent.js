import React, { useContext } from "react";
import AppContainer from "../Containers/AppContainer";
import { CSSTransition } from "react-transition-group";

import LeftSidebar from "./LeftSidebar";
import ContentContainer from "../Containers/ContentContainer";

import MenuContext from "../../Context/menuContext";

const AppContent = () => {
  const menuContext = useContext(MenuContext);

  const { showLeftSidebar } = menuContext;

  return (
    <CSSTransition in={showLeftSidebar} timeout={350} classNames="content">
      <AppContainer>
        <LeftSidebar />
        <ContentContainer />
      </AppContainer>
    </CSSTransition>
  );
};

export default AppContent;
