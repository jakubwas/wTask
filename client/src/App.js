// Dependencies
import React, { Fragment } from "react";
// React Components
import Navbar from "./Components/Layout/_MainComponents/Navbar";
import AppContent from "./Components/Layout/_MainComponents/AppContent";
// Context API
import DisplayState from "./Context/display/DisplayState";
import TodoState from "./Context/todo/TodoState";

const App = () => {
  return (
    <Fragment>
      <TodoState>
        <DisplayState>
          <Navbar />
          <AppContent />
        </DisplayState>
      </TodoState>
    </Fragment>
  );
};

export default App;
