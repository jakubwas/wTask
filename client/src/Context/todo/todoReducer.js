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

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case SET_PRIORITY:
      let updatedPriority;
      if (state.taskPriority === 1 && action.payload === 1) {
        updatedPriority = 0;
      } else if (state.taskPriority === action.payload) {
        updatedPriority = action.payload - 1;
      } else {
        updatedPriority = action.payload;
      }
      return {
        ...state,
        taskPriority: updatedPriority,
      };
    case GET_CURRENT_INPUT_VALUE:
      return {
        ...state,
        currentInputValue: action.payload,
      };
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [
          {
            _id: action.payload._id,
            status: action.payload.status,
            priority: action.payload.priority,
            name: action.payload.name,
          },
          ...state.tasks,
        ],
      };
    case CLEAR_FORM:
      return {
        ...state,
        currentInputValue: "",
        taskPriority: 0,
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        loading: false,
      };
    case DELETE_SINGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case CLEAR_TODOS_AFTER_LOGOUT:
      return {
        ...state,
        tasks: [],
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};
