import React, { useReducer } from "react";
import TodoReducer from "./todoReducer";
import TodoContext from "./todoContext";
import { UPDATE_PRIORITY } from "../types";

const TodoState = (props) => {
  const initialState = {
    taskPriority: 0,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Methods

  // Update Form Priority
  const updateTaskPriority = (priorityValue) => {
    dispatch({
      type: UPDATE_PRIORITY,
      payload: priorityValue,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        taskPriority: state.taskPriority,
        updateTaskPriority,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
