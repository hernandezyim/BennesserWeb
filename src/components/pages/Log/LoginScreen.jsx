import { useSelector } from "react-redux";
import { Form } from "../../auth/Form";
import { addTitle } from "../../../helpers/addTitle";
import { Box, Grid, Hidden, Modal, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "../../../styles/components/login";

export const LoginScreen = () => {
  const classes = useStyles();

  useEffect(() => {
    addTitle("Login");
  }, []);

  const { loading } = useSelector((state) => state.ui);

  return (
    <>
      <Modal className={classes.modal} open={loading}>
        <Box>
          <FontAwesomeIcon className={classes.icon} icon="certificate" pulse />
        </Box>
      </Modal>
      <Grid
        className={classes.root}
        alignItems="center"
        justifyContent="center"
        container
      >
        <Paper elevation={5} className={classes.paper}>
          <Grid container>
            <Hidden xsDown>
              <Grid item sm={6}>
                <Box
                  style={{ background: "red", width: "100%", height: "100%" }}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <Form />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
