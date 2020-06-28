// Dependencies
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
// React Components
import MenuContainer from "../../Containers/MenuContainer";
import TodoListButton from "../Menu/TodoListButton";
import HabitsControlButton from "../Menu/HabitsControlButton";
// Context API
import DisplayContext from "../../../Context/display/displayContext";

const Menu = () => {
  const displayContext = useContext(DisplayContext);
  const { menuVisibility } = displayContext;

  return (
    <div>
      <CSSTransition
        in={menuVisibility}
        timeout={350}
        appear={true}
        unmountOnExit
        classNames="menu"
      >
        <MenuContainer>
          <Link to="/" className="link">
            <TodoListButton />
          </Link>
          <Link to="/habits-control" className="link">
            <HabitsControlButton />
          </Link>
        </MenuContainer>
      </CSSTransition>
    </div>
  );
};

export default Menu;
