import React from "react";

import Navbar from "./Components/Layout/Navbar";
import AppContainer from "./Components/Containers/AppContainer";
import LeftSidebar from "./Components/Layout/LeftSidebar";

// Only temporay
import ContentContainer from "./Components/Containers/ContentContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppContainer>
        <LeftSidebar />
        <ContentContainer />
      </AppContainer>
    </div>
  );
};

export default App;
