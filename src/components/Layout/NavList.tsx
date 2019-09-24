import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    padding: 0
  }
});

const NavList: FunctionComponent = props => {
  const classes = useStyles();
  const portfolio: string =
    "https://joe-gough.com/";
  const instagram: string = "https://www.instagram.com/joe.g.photo/";

  function handleLinkClick(url: string) {
    window.open(url);
  }

  return (
    <List className={classes.list}>
      <ListItem button>
        <ListItemText onClick={() => handleLinkClick(portfolio)}>
          portfolio
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText onClick={() => handleLinkClick(instagram)}>
          instagram
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default NavList;
