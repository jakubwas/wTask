import { UPDATE_PRIORITY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_PRIORITY:
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

    default:
      return {
        ...state,
      };
  }
};
