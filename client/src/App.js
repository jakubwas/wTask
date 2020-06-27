// Dependencies
import React from "react";
// React Components
import Navbar from "./Components/Layout/Navbar";
import AppContent from "./Components/Layout/AppContent";
// Context API
import MenuState from "./Context/MenuState";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <MenuState>
        <Navbar />
        <AppContent />
      </MenuState>
    </div>
  );
};

export default App;
