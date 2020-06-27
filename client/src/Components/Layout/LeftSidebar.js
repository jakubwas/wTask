// Dependencies
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
// React Components
import LeftSidebarContainer from "../Containers/LeftSidebarContainer";
import TodoListButton from "../Buttons/LeftSidebarButtons/TodoListButton";
import HabitsControlButton from "../Buttons/LeftSidebarButtons/HabitsControlButton";
// Context API
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
          <Link to="/" className="link">
            <TodoListButton />
          </Link>
          <Link to="/habits-control" className="link">
            <HabitsControlButton />
          </Link>
        </LeftSidebarContainer>
      </CSSTransition>
    </div>
  );
};

export default LeftSidebar;
