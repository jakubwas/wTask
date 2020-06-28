// Dependencies
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// React Components
import AppContainer from "../../Containers/AppContainer";
import Menu from "./Menu";
import HabitsEditor from "./HabitsEditor";
import TodoEditor from "./TodoEditor";
import SettingsDropDown from "./SettingsDropDown";
// Context API
import DisplayContext from "../../../Context/display/displayContext";

// App Content => Sidebars and Editor (without navbar)
const AppContent = () => {
  const displayContext = useContext(DisplayContext);

  const { menuVisibility, settingsVisibility } = displayContext;

  return (
    <Router>
      <AppContainer>
        <Menu />
        {settingsVisibility && <SettingsDropDown />}
        <CSSTransition in={menuVisibility} timeout={350} classNames="content">
          <Switch>
            <Route exact path="/" component={TodoEditor} />
            <Route exact path="/habits-control" component={HabitsEditor} />
          </Switch>
        </CSSTransition>
      </AppContainer>
    </Router>
  );
};

export default AppContent;
