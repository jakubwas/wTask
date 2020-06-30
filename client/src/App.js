// Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// React Components
import Navbar from "./Components/Layout/_MainComponents/Navbar";
import TodoEditor from "./Components/Layout/_MainComponents/TodoEditor";
import RegisterPage from "./Components/auth/RegisterPage";
import HabitsEditor from "./Components/Layout/_MainComponents/HabitsEditor";
// Context API
import DisplayState from "./Context/display/DisplayState";
import TodoState from "./Context/todo/TodoState";
import AuthState from "./Context/auth/AuthState";

const App = () => {
  return (
    <Router>
      <Fragment>
        <AuthState>
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
        </AuthState>
      </Fragment>
    </Router>
  );
};

export default App;
