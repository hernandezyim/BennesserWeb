import { types } from "../types/auth/types";

const initialState = {
  logged: false,
  lastpath: "/benesser",
  token: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.auth.login:
      return {
        ...state,
        logged: true,
      };

    case types.auth.logout:
      return {
        ...state,
        logged: false,
      };

    case types.auth.saveLastpath:
      return {
        ...state,
        lastpath: action.payload,
      };
    case types.auth.saveToken:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
