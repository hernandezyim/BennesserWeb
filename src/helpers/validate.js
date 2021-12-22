import { types } from "../types/errors/types";

export const validate = (values) => {
  const errors = {};

  if (
    values.username?.trim().length === 0 &&
    values.password?.trim().length === 0
  )
    errors.userAndpass = types.userAndPass.undefined;
  else if (
    values.email?.trim().length === 0 &&
    values.password?.trim().length === 0
  )
    errors.emailAndpass = types.emailAndPass.undefined;
  else if (values.username?.trim().length === 0)
    errors.username = types.user.undefined;
  else if (values.password?.trim().length === 0)
    errors.password = types.pass.undefined;
  else if (values.email?.trim().length === 0)
    errors.email = types.email.undefined;

  return errors;
};
