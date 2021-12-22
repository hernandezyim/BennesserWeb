import { combineReducers } from "redux";
import { authReducer } from "./authReducer.js";
import { clientsReducer } from "./clientsReducer.js";
import { uiReducer } from "./uiReducer.js";

export const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  clients: clientsReducer,
});
