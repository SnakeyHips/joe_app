import React, { FunctionComponent, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStylesBase from "../../styles/styles-base";
import { Photo } from "../../models/photo";
import { GetAllPhotos } from "../../services/photo_service";
import PhotoDialog from "../Dialogs/PhotoDialog";
import moment from "moment";

const Home: FunctionComponent = props => {
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

  const content = loading ? (
    <Grid container justify="center">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
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
            <img
              className={classesBase.photo}
              src={photo.link}
              alt={photo.title}
            />
            <p>
              <i>{photo.description}</i>
            </p>
            <p className={classesBase.dateText}>
              {moment(photo.datetime).fromNow()}
            </p>
          </Grid>
        );
      })}
    </>
  );

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        {content}
      </Grid>
      {photo && <PhotoDialog open={open} handleClose={handleClose} photo={photo} />}
    </div>
  );
};

export default Home;
