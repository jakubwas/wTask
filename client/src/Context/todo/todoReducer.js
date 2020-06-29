import {
  SET_PRIORITY,
  GET_CURRENT_INPUT_VALUE,
  CLEAR_FORM,
  ADD_NEW_TASK,
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
          { name: state.currentInputValue, priority: state.taskPriority },
          ...state.tasks,
        ],
      };
    case CLEAR_FORM:
      return {
        ...state,
        currentInputValue: "",
        taskPriority: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
