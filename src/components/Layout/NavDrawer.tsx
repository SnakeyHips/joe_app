import React, { FunctionComponent, useState, MouseEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
  })
);

const NavDrawer: FunctionComponent = props => {
  const classes = useStyles({});
  const portfolio: string =
    "https://joe-gough.com/";
  const instagram: string = "https://www.instagram.com/joe.g.photo/";

  function handleLinkClick(url: string) {
    window.open(url);
  }

  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const navdrawer = smAndDown ? (
    <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} anchor="left">
      <List>
        <ListItem>
          <ListItemText onClick={() => handleLinkClick(portfolio)}>
            portfolio
          </ListItemText>
          <ListItemText onClick={() => handleLinkClick(instagram)}>
            instagram
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  ) : (
    <></>
  );

  return <div>{navdrawer}</div>;
};

export default NavDrawer;
