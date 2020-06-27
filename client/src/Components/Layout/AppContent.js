// Dependencies
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// React Components
import AppContainer from "../Containers/AppContainer";
import LeftSidebar from "./LeftSidebar";
import HabitsEditor from "./HabitsEditor";
import TodoEditor from "../Layout/TodoEditor";
// Context API
import MenuContext from "../../Context/menuContext";

// App Content => Sidebars and Editor (without navbar)
const AppContent = () => {
  const menuContext = useContext(MenuContext);

  const { showLeftSidebar } = menuContext;

  return (
    <Router>
      <CSSTransition in={showLeftSidebar} timeout={350} classNames="content">
        <AppContainer>
          <LeftSidebar />
          <Switch>
            <Route exact path="/" component={TodoEditor} />
            <Route exact path="/habits-control" component={HabitsEditor} />
          </Switch>
        </AppContainer>
      </CSSTransition>
    </Router>
  );
};

export default AppContent;
