import React, { useContext } from "react";
import AppContainer from "../Containers/AppContainer";

import LeftSidebar from "./LeftSidebar";
import ContentContainer from "../Containers/ContentContainer";

import MenuContext from "../../Context/menuContext";

const AppContent = () => {
  const menuContext = useContext(MenuContext);

  const { showLeftSidebar } = menuContext;

  return (
    <AppContainer>
      {showLeftSidebar && <LeftSidebar />}
      <ContentContainer />
    </AppContainer>
  );
};

export default AppContent;
