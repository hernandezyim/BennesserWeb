import { types } from "../types/auth/types";

const initialState = {
  loading: false,
  msgError: {},
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ui.startLoading:
      return {
        ...state,
        loading: true,
      };

    case types.ui.endLoading:
      return {
        ...state,
        loading: false,
      };

    case types.ui.setErrors:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.ui.removeErrors:
      return {
        ...state,
        msgError: {},
      };

    default:
      return state;
  }
};
