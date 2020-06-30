// Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// React Components
import Navbar from "./Components/Layout/_MainComponents/Navbar";
import TodoEditor from "./Components/Layout/_MainComponents/TodoEditor";
import RegisterPage from "./Components/auth/RegisterPage";
// Context API
import DisplayState from "./Context/display/DisplayState";
import TodoState from "./Context/todo/TodoState";
import HabitsEditor from "./Components/Layout/_MainComponents/HabitsEditor";

const App = () => {
  return (
    <Router>
      <Fragment>
        <TodoState>
          <DisplayState>
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/" component={TodoEditor} />
              <Route exact path="/habits-control" component={HabitsEditor} />
            </Switch>
          </DisplayState>
        </TodoState>
      </Fragment>
    </Router>
  );
};

export default App;
