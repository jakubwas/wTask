import React, { useContext } from "react";

import Navbar from "./Components/Layout/Navbar";

// Only temporay
import AppContainer from "./Components/Containers/AppContainer";

// Context
import MenuState from "./Context/MenuState";

const App = () => {
  return (
    <div>
      <MenuState>
        <Navbar />
        <AppContainer />
      </MenuState>
    </div>
  );
};

export default App;
