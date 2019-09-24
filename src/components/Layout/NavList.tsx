import React, { FunctionComponent } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const NavList: FunctionComponent = props => {
  const portfolio: string =
    "https://joe-gough.com/";
  const instagram: string = "https://www.instagram.com/joe.g.photo/";

  function handleLinkClick(url: string) {
    window.open(url);
  }

  return (
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
  );
};

export default NavList;
