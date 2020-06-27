// Dependencies
import React from "react";
// React Components
import Navbar from "./Components/Layout/Navbar";
import AppContent from "./Components/Layout/AppContent";
// Context API
import DisplayState from "./Context/display/DisplayState";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <DisplayState>
        <Navbar />
        <AppContent />
      </DisplayState>
    </div>
  );
};

export default App;
