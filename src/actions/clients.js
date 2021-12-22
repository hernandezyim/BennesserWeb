import axios from "axios";
import { types } from "../types/clients/types";

export const startmiddlewareClients = () => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (token) {
        const headers = {
          token,
        };
        const res = await axios.get(
          "https://api.benesser.net/api/Clientes/All",
          {
            headers,
          }
        );
        dispatch(saveClients(res.data));
      }
    } catch (error) {
      console.warn(error);
    }
  };
};
export const saveClients = (clients) => ({
  type: types.saveClients,
  payload: clients,
});
