import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import LeftSidebarContainer from "../Containers/LeftSidebarContainer";

import MenuContext from "../../Context/menuContext";

const LeftSidebar = () => {
  const menuContext = useContext(MenuContext);
  const { showLeftSidebar } = menuContext;

  return (
    <div>
      <CSSTransition
        in={showLeftSidebar}
        timeout={350}
        appear={true}
        unmountOnExit
        classNames="my-node"
      >
        <LeftSidebarContainer>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </LeftSidebarContainer>
      </CSSTransition>
    </div>
  );
};

export default LeftSidebar;
