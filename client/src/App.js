// Dependencies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// React Components
import TodoEditor from "./Components/Layout/_MainComponents/TodoEditor";
import RegisterPage from "./Components/auth/RegisterPage";
import LoginPage from "./Components/auth/LoginPage";
// Context API
import DisplayState from "./Context/display/DisplayState";
import TodoState from "./Context/todo/TodoState";
import AuthState from "./Context/auth/AuthState";
// Private Route
import PrivateRoute from "./Components/routing/PrivateRoute";
// Token
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Router>
      <Fragment>
        <AuthState>
          <TodoState>
            <DisplayState>
              <Switch>
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/" component={TodoEditor} />
              </Switch>
            </DisplayState>
          </TodoState>
        </AuthState>
      </Fragment>
    </Router>
  );
};

export default App;
