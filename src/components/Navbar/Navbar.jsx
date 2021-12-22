import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Button,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
  useMediaQuery,
  IconButton,
  Drawer,
  Divider,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startmiddlewareLogout } from "../../actions/auth";

import { useStyles } from "../../styles/components/navbar";

export const Navbar = () => {
  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState(false);
  const [openBars, setOpenBars] = useState(false);
  const [openMaintenace, setOpenMaintenace] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenBars(false);
    setOpenMaintenace(false);
  };

  const handleBack = (element) => element(false);

  const MenuItems = () => (
    <>
      <Link to="/benesser/mantenimientos/clientes">
        <MenuItem>Clientes</MenuItem>
      </Link>

      <Link to="/benesser/mantenimientos/procedimientos">
        <MenuItem>Procedimientos</MenuItem>
      </Link>

      <Link to="/benesser/mantenimientos/tipos-de-piel">
        <MenuItem> Tipos de piel</MenuItem>
      </Link>
    </>
  );
  const BtnLogout = () => (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => dispatch(startmiddlewareLogout())}
    >
      Cerrar Sesion
    </Button>
  );
  return (
    <div>
      <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.content}>
          <Typography className={classes.logo} variant="h6">
            BENESSER
          </Typography>
          <div>
            {useMediaQuery((theme) => theme.breakpoints.down("xs")) ? (
              <>
                <IconButton onClick={() => setOpenBars(true)}>
                  <FontAwesomeIcon icon="bars" />
                </IconButton>

                <Drawer
                  className={classes.drawer}
                  anchor="right"
                  open={openBars}
                  onClose={handleClose}
                >
                  <div className={classes.drawerHeader}>
                    <Button>BENESSER</Button>
                    <IconButton onClick={handleClose}>
                      <FontAwesomeIcon icon="times-circle" />
                    </IconButton>
                  </div>
                  <Divider />
                  <Button
                    onClick={() => setOpenMaintenace(true)}
                    endIcon={<FontAwesomeIcon icon="caret-right" />}
                  >
                    Mantenimientos
                  </Button>
                  <Drawer
                    className={classes.drawer}
                    anchor="right"
                    open={openMaintenace}
                    onClose={handleClose}
                  >
                    <div className={classes.drawerHeader}>
                      <IconButton onClick={() => handleBack(setOpenMaintenace)}>
                        <FontAwesomeIcon icon="caret-left" />
                      </IconButton>
                      <Typography variant="subtitle1">
                        Mantenimientos
                      </Typography>
                      <IconButton onClick={handleClose}>
                        <FontAwesomeIcon icon="times-circle" />
                      </IconButton>
                    </div>
                    <MenuItems />
                  </Drawer>
                  <BtnLogout />
                </Drawer>
              </>
            ) : (
              <>
                <Button
                  className={classes.buttonI}
                  aria-controls="menu"
                  onClick={(e) => setOpenMenu(e.currentTarget)}
                  endIcon={<FontAwesomeIcon icon="caret-down" />}
                >
                  Mantenimientos
                </Button>
                <Menu
                  className={classes.menu}
                  id="menu"
                  anchorEl={openMenu}
                  open={!!openMenu}
                  onClose={() => setOpenMenu(null)}
                >
                  <MenuItems />
                </Menu>
                <BtnLogout />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
