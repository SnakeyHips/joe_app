import React, { FunctionComponent } from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import NavList from "./NavList";
import useStylesBase from "../../styles/styles-base";
import Drawer from "@material-ui/core/Drawer";

const Navigation: FunctionComponent = props => {
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const navigation = smAndDown ? (
    <TopAppBar />
  ) : (
    <Drawer
      className={classesBase.drawer}
      variant="permanent"
      classes={{
        paper: classesBase.drawerPaper
      }}
      anchor="left"
    >
      <NavList />
    </Drawer>
  );

  return (
    <div className={classesBase.base}>
      {navigation}
      <main className={classesBase.content}>{props.children}</main>
    </div>
  );
};

export default Navigation;
