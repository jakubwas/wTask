// Dependencies
import React, { Fragment } from "react";
// React Components
import Navbar from "./Components/Layout/Navbar";
import AppContent from "./Components/Layout/AppContent";
// Context API
import DisplayState from "./Context/display/DisplayState";

const App = () => {
  return (
    <Fragment>
      <DisplayState>
        <Navbar />
        <AppContent />
      </DisplayState>
    </Fragment>
  );
};

export default App;
