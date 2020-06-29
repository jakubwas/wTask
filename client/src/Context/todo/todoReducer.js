import {
  SET_PRIORITY,
  GET_CURRENT_INPUT_VALUE,
  CLEAR_FORM,
  ADD_NEW_TASK,
  TOGGLE_STATUS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
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
            id: action.payload,
            name: state.currentInputValue,
            priority: state.taskPriority,
            status: "uncompleted",
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
          task.id === action.payload ? { ...task, status: "completed" } : task
        ),
      };
    default:
      return {
        ...state,
      };
  }
};
