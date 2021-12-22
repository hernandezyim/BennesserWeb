import { types } from "../types/clients/types";

const initialState = {
  clients: null,
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.saveClients:
      return {
        ...state,
        clients: action.payload,
      };

    default:
      return state;
  }
};
