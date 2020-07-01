// Dependencies
import React, { useReducer } from "react";
import axios from "axios";
import TodoReducer from "./todoReducer";
import TodoContext from "./todoContext";
import {
  SET_PRIORITY,
  GET_CURRENT_INPUT_VALUE,
  CLEAR_FORM,
  ADD_NEW_TASK,
  TOGGLE_STATUS,
  DELETE_SINGLE_TASK,
  GET_TASKS,
  CLEAR_TODOS_AFTER_LOGOUT,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    taskPriority: 0,
    currentInputValue: "",
    tasks: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Methods
  const getTasks = async () => {
    try {
      const res = await axios.get("/api/task-list");

      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
  const addNewTask = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let task = {
      name: state.currentInputValue,
      priority: state.taskPriority,
      status: "uncompleted",
    };
    try {
      const res = await axios.post("/api/task-list", task, config);

      dispatch({
        type: ADD_NEW_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // Toggle status
  const toggleStatus = async (task) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/task-list/${task._id}`, task, config);

      dispatch({
        type: TOGGLE_STATUS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Single Task
  const deleteSingleTask = async (id) => {
    try {
      await axios.delete(`/api/task-list/${id}`);
      dispatch({
        type: DELETE_SINGLE_TASK,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Clear Todos

  const clearTodos = () => {
    dispatch({
      type: CLEAR_TODOS_AFTER_LOGOUT,
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
        deleteSingleTask,
        getTasks,
        clearTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
