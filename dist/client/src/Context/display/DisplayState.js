// Dependencies
import React, { useReducer } from "react";
// Context API
import DisplayContext from "./displayContext";
import DisplayReducer from "./displayReducer";
// Types
import { MENU_TOGGLE, SETTINGS_TOGGLE } from "../types";
// React Component
const DisplayState = (props) => {
  const initialState = {
    menuVisibility: false,
    settingsVisibility: false,
  };

  const [state, dispatch] = useReducer(DisplayReducer, initialState);

  const toggleMenuVisibility = () => {
    dispatch({
      type: MENU_TOGGLE,
      payload: state.menuVisibility,
    });
  };

  const toggleSettingsVisibility = () => {
    dispatch({
      type: SETTINGS_TOGGLE,
      payload: state.settingsVisibility,
    });
  };

  const resetMenuVisibility = () => {
    dispatch({
      type: MENU_TOGGLE,
      payload: true,
    });
  };

  return (
    <DisplayContext.Provider
      value={{
        menuVisibility: state.menuVisibility,
        settingsVisibility: state.settingsVisibility,
        toggleMenuVisibility,
        toggleSettingsVisibility,
        resetMenuVisibility,
      }}
    >
      {props.children}
    </DisplayContext.Provider>
  );
};

export default DisplayState;
