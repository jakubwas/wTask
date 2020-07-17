// Types
import { MENU_TOGGLE, SETTINGS_TOGGLE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        menuVisibility: !action.payload,
      };
    case SETTINGS_TOGGLE:
      return {
        ...state,
        settingsVisibility: !action.payload,
      };
    default:
      return state;
  }
};
