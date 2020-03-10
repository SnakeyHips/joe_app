import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import useStylesBase from "../../styles/styles-base";
import { Photo } from "../../models/photo";
import { GetAllPhotos } from "../../services/photo_service";
import PhotoDialog from "../Dialogs/PhotoDialog";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";

export default function Home() {
  const classesBase = useStylesBase();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [photo, setPhoto] = useState<Photo>();

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

  function handleOpen(photo: Photo) {
    setPhoto(photo);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const skeleton = <Skeleton variant="rect" height={582} width={"100%"} />;

  const content = !loading ? (
    <>
      {skeleton}
      {skeleton}
      {skeleton}
    </>
  ) : (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => {
        return false;
      }}
      loader={skeleton}
    >
      {photos.map((photo: Photo) => {
        return (
          <Grid
            item
            md={8}
            sm={10}
            xs={12}
            className={classesBase.photoItem}
            key={photo.id}
            onClick={() => handleOpen(photo)}
          >
            <img className={classesBase.photo} src={photo.link} alt={photo.title} />
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
