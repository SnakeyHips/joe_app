import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import useStylesBase from "../../styles/styles-base";
import { Photo } from "../../models/photo";
import { GetAllPhotos } from "../../services/photo_service";
import PhotoDialog from "../Dialogs/PhotoDialog";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skeleton: {
      marginTop: theme.spacing(2),
      marginBotton: theme.spacing(2)
    },
    photo: {
      width: "100%"
    },
    photoItem: {
      margin: "auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [infPhotos, setInfPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    setLoading(true);
    const result: Photo[] = await GetAllPhotos();
    if (result) {
      setPhotos(result);
      setInfPhotos(result);
    }
    setLoading(false);
  }

  function handleOpen(photo: Photo) {
    setPhoto(photo);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleLoadMore() {
    setPage(page + 1);
    setInfPhotos([...photos.slice(0)]);
  }

  const skeleton = <Skeleton key={0} className={classes.skeleton} variant="rect" height={582} width={874} />;

  const content = loading ? (
    <>
      {skeleton}
      {skeleton}
      {skeleton}
    </>
  ) : (
    <InfiniteScroll
      pageStart={page}
      loadMore={handleLoadMore}
      hasMore={photos.length < infPhotos.length}
      loader={skeleton}
    >
      {photos.map((photo: Photo) => {
        return (
          <Grid
            item
            md={8}
            sm={10}
            xs={12}
            className={classes.photoItem}
            key={photo.id}
            onClick={() => handleOpen(photo)}
          >
            <img className={classes.photo} src={photo.link} alt={photo.title} />
            <p>
              <i>{photo.description}</i>
            </p>
            <p className={classesBase.dateText}>{moment(photo.datetime).fromNow()}</p>
          </Grid>
        );
      })}
    </InfiniteScroll>
  );

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        {content}
      </Grid>
      {photo && <PhotoDialog open={open} handleClose={handleClose} photo={photo} />}
    </div>
  );
}
