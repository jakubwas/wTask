// Dependencies
import React, { useReducer } from "react";
// Context API
import DisplayContext from "./displayContext";
import DisplayReducer from "./displayReducer";
// Types
import { LEFT_SIDEBAR_TOGGLE } from "../types";

const DisplayState = (props) => {
  const initialState = {
    menuVisibility: true,
  };

  const [state, dispatch] = useReducer(DisplayReducer, initialState);

  const toggleMenuVisibility = () => {
    dispatch({
      type: LEFT_SIDEBAR_TOGGLE,
      payload: state.menuVisibility,
    });
  };

  return (
    <DisplayContext.Provider
      value={{
        menuVisibility: state.menuVisibility,
        toggleMenuVisibility,
      }}
    >
      {props.children}
    </DisplayContext.Provider>
  );
};

export default DisplayState;
