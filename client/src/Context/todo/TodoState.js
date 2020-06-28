import React, { useReducer } from "react";
import TodoReducer from "./todoReducer";
import TodoState from "./TodoState";

const TodoState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Methods

  return <TodoState.Provider value={{}}>{props.children}</TodoState.Provider>;
};
