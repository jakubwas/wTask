import { LEFT_SIDEBAR_SHOW_HIDE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LEFT_SIDEBAR_SHOW_HIDE:
      return {
        ...state,
        showLeftSidebar: !action.payload,
      };
    default:
      return state;
  }
};
