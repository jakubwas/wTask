import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import LeftSidebarContainer from "../Containers/LeftSidebarContainer";
import TodoListButton from "../Buttons/LeftSidebarButtons/TodoListButton";
import HabitsControlButton from "../Buttons/LeftSidebarButtons/HabitsControlButton";

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
          <TodoListButton />
          <HabitsControlButton />
        </LeftSidebarContainer>
      </CSSTransition>
    </div>
  );
};

export default LeftSidebar;
