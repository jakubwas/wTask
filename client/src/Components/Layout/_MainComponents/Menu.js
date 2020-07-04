// Dependencies
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
// React Components
import MenuContainer from "../../Containers/MenuContainer";
import TodoListButton from "../Menu/TodoListButton";
import HabitsControlButton from "../Menu/HabitsControlButton";
import CurrentUserInfo from "../Menu/CurrentUserInfo";
// Context API
import DisplayContext from "../../../Context/display/displayContext";
// React Component
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
          <CurrentUserInfo />
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
