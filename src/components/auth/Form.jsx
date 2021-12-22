import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeErrors,
  setErrors,
  startmiddlewareLogin,
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import { validate } from "../../helpers/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "../../styles/components/form";

export const Form = () => {
  const classes = useStyles();

  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    username: "manolo",
    password: "hola",
  });

  const { username, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(values);

    if (Object.keys(errors).length !== 0) dispatch(setErrors(errors));
    else {
      Object.keys(msgError).length > 0 && dispatch(removeErrors());
      dispatch(startmiddlewareLogin(values));
    }
  };
  useEffect(() => {
    document.querySelector("[name = 'username']").focus();
  }, []);

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <FormControl fullWidth>
        <Typography className={classes.title} variant="h5" align="center">
          Benesser
        </Typography>
        <TextField
          className={classes.input}
          type="email"
          name="username"
          value={username}
          onChange={handleInputChange}
          variant="outlined"
          label="Usuario"
          error={!!msgError.username || !!msgError.userAndpass}
          helperText={
            msgError.username && (
              <>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon="exclamation-circle"
                />
                {msgError.username}
              </>
            )
          }
        />
        <TextField
          className={classes.input}
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          variant="outlined"
          label="Contraseña"
          error={!!msgError.password || !!msgError.userAndpass}
          helperText={
            (msgError.password && (
              <>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon="exclamation-circle"
                />
                {msgError.password}
              </>
            )) ||
            (msgError.userAndpass && (
              <>
                <FontAwesomeIcon
                  className={classes.icon}
                  icon="exclamation-circle"
                />
                {msgError.userAndpass}
              </>
            ))
          }
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Iniciar Sesión
        </Button>
      </FormControl>
    </form>
  );
};
