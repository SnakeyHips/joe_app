import React, { FunctionComponent, useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";
import { Photo } from "../../models/photo";
import { GetAllPhotos } from "../../services/photo_service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  })
);

const Home: FunctionComponent = props => {
  const classes = useStyles({});
  const classesBase = useStylesBase({});
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    fetchPhotos();
  }, [photos.length]);

  async function fetchPhotos() {
    setLoading(true);
    const result: Photo[] = await GetAllPhotos();
    if (result) {
      setPhotos(result);
    }
    setLoading(false);
  }

  const content = loading ? (
    <Grid container justify="center" >
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      <span>home</span>
    </>
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        {content}
      </Grid>
    </div>
  );
};

export default Home;
