import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    base: {
      fontFamily: "Times New Roman, Times, serif",
      display: "flex",
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "unset",
        wordBreak: "break-word"
      },
      "& p": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      "& li": {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      "& h6": {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
      }
    },
    content: {
      flexGrow: 1
    },
    dateText: {
      fontSize: "0.75rem !important"
    },
    drawer: {
      width: 180,
      flexShrink: 0,
    },
    drawerPaper: {
      borderRight: "unset",
      width: 180,
    },
    primaryText: {
      color: theme.palette.primary.main
    },
    dialog: {
      "& .MuiButton-root": {
        fontFamily: "Times New Roman, Times, serif",
        textTransform: "lowercase"
      },
      "& .MuiPaper-elevation24": {
        boxShadow: "none !important"
      }
    },
    photo: {
      borderRadius: 4,
      width: "100%"
    },
    photoDialog: {
      display: "flex",
      margin: "auto",
      maxHeight: 678
    },
    photoItem: {
      margin: theme.spacing(2)
    }
  })
);

export default useStylesBase;
