// Types
import { LEFT_SIDEBAR_TOGGLE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LEFT_SIDEBAR_TOGGLE:
      return {
        ...state,
        menuVisibility: !action.payload,
      };
    default:
      return state;
  }
};
