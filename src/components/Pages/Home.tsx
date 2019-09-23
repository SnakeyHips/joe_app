import React, { FunctionComponent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  })
);

const Home: FunctionComponent = props => {
  const classes = useStyles({});
  const classesBase = useStylesBase({});
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        <span>home</span>
      </Grid>
    </div>
  );
};

export default Home;
