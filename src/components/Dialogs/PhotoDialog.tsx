import React, { FunctionComponent, useState, useEffect, ChangeEvent } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Photo } from "../../models/photo";
import useStylesBase from "../../styles/styles-base";

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
      disableBackdropClick={true}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogTitle>{photo.title}</DialogTitle>
      <DialogContent>
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
