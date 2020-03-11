import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  list: {
    padding: 0
  },
  listText: {
    fontFamily: "Times New Roman, Times, serif"
  }
});

export default function NavList() {
  const classes = useStyles();
  const portfolio: string = "https://joe-gough.com/";
  const instagram: string = "https://www.instagram.com/joe.g.photo/";

  function handleLinkClick(url: string) {
    window.open(url);
  }

  function handleContactClick() {
    window.location.href = "mailto:josephjgough@gmail.com?Subject=";
  }

  return (
    <List className={classes.list}>
      <ListItem button>
        <div className={classes.listText} onClick={() => handleLinkClick(portfolio)}>
          portfolio
        </div>
      </ListItem>
      <ListItem button>
        <div className={classes.listText} onClick={() => handleLinkClick(instagram)}>
          instagram
        </div>
      </ListItem>
      <ListItem button>
        <div className={classes.listText} onClick={() => handleContactClick()}>
          contact
        </div>
      </ListItem>
    </List>
  );
}
