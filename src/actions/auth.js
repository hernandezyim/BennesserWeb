import { types } from "../types/auth/types";
import { types as typesE } from "../types/errors/types";
import axios from "axios";

export const startmiddlewareLogin = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await axios.post(
        "https://api.benesser.net/api/Security/Login",
        user
      );
      dispatch(login());
      dispatch(saveToken(res.data));
      localStorage.setItem("token", res.data);
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());

      if (error.response) {
        const { status } = error.response;
        if (status === 401) dispatch(setErrors({ userAndpass: "" }));
        else if (status === 404)
          dispatch(setErrors({ userAndpass: typesE.userAndPass.incorrect }));
        else if (status === 402) dispatch(setErrors({ userAndpass: "" }));
      }
    }
  };
};
export const startmiddlewareLogout = () => {
  return (dispath) => {
    dispath(startLoading());

    setTimeout(() => {
      dispath(logout());
      dispath(endLoading());
    }, 1000);
  };
};

export const login = () => ({ type: types.auth.login });
export const logout = () => ({ type: types.auth.logout });
export const saveLastPath = (pathname) => ({
  type: types.auth.saveLastpath,
  payload: pathname,
});
export const setErrors = (errors) => ({
  type: types.ui.setErrors,
  payload: errors,
});
const saveToken = (token) => ({
  type: types.auth.saveToken,
  payload: token,
});
export const removeErrors = () => ({ type: types.ui.removeErrors });
export const startLoading = () => ({ type: types.ui.startLoading });
export const endLoading = () => ({ type: types.ui.endLoading });
