import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStylesBase from "../../styles/styles-base";

export default function NavList() {
  const classesBase = useStylesBase();
  const portfolio: string = "https://joe-gough.com/";
  const instagram: string = "https://www.instagram.com/joe.g.photo/";

  function handleLinkClick(url: string) {
    window.open(url);
  }

  function handleContactClick() {
    window.location.href = "mailto:josephjgough@gmail.com?Subject=";
  }

  return (
    <List className={classesBase.padding}>
      <ListItem button>
        <div onClick={() => handleLinkClick(portfolio)}>portfolio</div>
      </ListItem>
      <ListItem button>
        <div onClick={() => handleLinkClick(instagram)}>instagram</div>
      </ListItem>
      <ListItem button>
        <div onClick={() => handleContactClick()}>contact</div>
      </ListItem>
    </List>
  );
}
