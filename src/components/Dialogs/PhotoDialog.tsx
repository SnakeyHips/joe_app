import React, { FunctionComponent, useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { Photo } from "../../models/photo";
import useStylesBase from "../../styles/styles-base";
import moment from "moment";

interface PhotoDialogProps {
  open: boolean;
  handleClose: () => void;
  photo: Photo;
}

const PhotoDialog: FunctionComponent<PhotoDialogProps> = props => {
  const classesBase = useStylesBase({});
  const [photo, setPhoto] = useState<Photo>(props.photo);

  useEffect(() => {
    setPhoto(props.photo);
  }, [props.photo]);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={classesBase.dialog}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogContent>
        <img
          className={classesBase.photoDialog}
          src={photo.link}
          alt={photo.title}
        />
        <p><i>{photo.description}</i></p>
        <p className={classesBase.dateText}>
          {moment(photo.datetime).fromNow()}
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PhotoDialog;
