// Dependencies
import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoReducer from "./todoReducer";
import TodoContext from "./todoContext";
import {
  SET_PRIORITY,
  GET_CURRENT_INPUT_VALUE,
  CLEAR_FORM,
  ADD_NEW_TASK,
  TOGGLE_STATUS,
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
    let id = uuidv4();
    dispatch({
      type: ADD_NEW_TASK,
      payload: id,
    });
  };
  // Toggle status
  const toggleStatus = (id) => {
    dispatch({
      type: TOGGLE_STATUS,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        taskPriority: state.taskPriority,
        currentInputValue: state.currentInputValue,
        tasks: state.tasks,
        setTaskPriority,
        getCurrentInputValue,
        clearForm,
        addNewTask,
        toggleStatus,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
