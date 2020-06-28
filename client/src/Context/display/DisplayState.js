// Dependencies
import React, { useReducer } from "react";
// Context API
import DisplayContext from "./displayContext";
import DisplayReducer from "./displayReducer";
// Types
import { MENU_TOGGLE, SETTINGS_TOGGLE } from "../types";

const DisplayState = (props) => {
  const initialState = {
    menuVisibility: true,
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

  return (
    <DisplayContext.Provider
      value={{
        menuVisibility: state.menuVisibility,
        settingsVisibility: state.settingsVisibility,
        toggleMenuVisibility,
        toggleSettingsVisibility,
      }}
    >
      {props.children}
    </DisplayContext.Provider>
  );
};

export default DisplayState;
