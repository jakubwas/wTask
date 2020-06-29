import React, { useReducer } from "react";
import TodoReducer from "./todoReducer";
import TodoContext from "./todoContext";
import {
  SET_PRIORITY,
  GET_CURRENT_INPUT_VALUE,
  CLEAR_FORM,
  ADD_NEW_TASK,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    taskPriority: 0,
    currentInputValue: "",
    tasks: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Methods

  // Set Form's Priority
  const setTaskPriority = (priorityValue) => {
    dispatch({
      type: SET_PRIORITY,
      payload: priorityValue,
    });
  };
  // Get current Form Input Value
  const getCurrentInputValue = (inputText) => {
    dispatch({
      type: GET_CURRENT_INPUT_VALUE,
      payload: inputText,
    });
  };
  // Clear Form (Priority and Input)
  const clearForm = () => {
    dispatch({
      type: CLEAR_FORM,
    });
  };
  // Add new Task
  const addNewTask = () => {
    console.log(state.tasks);
    dispatch({
      type: ADD_NEW_TASK,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        taskPriority: state.taskPriority,
        currentInputValue: state.currentInputValue,
        setTaskPriority,
        getCurrentInputValue,
        clearForm,
        addNewTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
