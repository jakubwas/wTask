import React, { useReducer } from "react";

import MenuContext from "./menuContext";
import MenuReducer from "./menuReducer";

import { LEFT_SIDEBAR_SHOW_HIDE } from "./types";

const MenuState = (props) => {
  const initialState = {
    showLeftSidebar: true,
  };

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const changeLeftSidebarVisibility = () => {
    dispatch({
      type: LEFT_SIDEBAR_SHOW_HIDE,
      payload: state.showLeftSidebar,
    });
  };

  return (
    <MenuContext.Provider
      value={{
        showLeftSidebar: state.showLeftSidebar,
        changeLeftSidebarVisibility,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
