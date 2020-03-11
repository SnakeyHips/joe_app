import React, { useState, MouseEvent } from "react";
import { createStyles, Theme, makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Spacer from "./Spacer";
import NavList from "./NavList";
import useStylesBase from "../../styles/styles-base";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: fade(theme.palette.background.default, 0.8),
      boxShadow: "none"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    }
  })
);

export default function TopAppBar() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [menu, setMenu] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setMenu(open);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs>
              <Grid container>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon color="primary" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container justify="center">
                <h6 className={classesBase.primaryText}>joe-g-photo</h6>
              </Grid>
            </Grid>
            <Grid item xs>
              <Spacer />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={menu}
        className={classesBase.drawer}
        classes={{
          paper: classesBase.drawerPaper
        }}
        anchor="left"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavList />
      </SwipeableDrawer>
    </div>
  );
}
