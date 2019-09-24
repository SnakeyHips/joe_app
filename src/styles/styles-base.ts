import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    base: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
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
        marginTop: 8,
        marginBottom: 8
      }
    },
    content: {
      flexGrow: 1
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
    primaryText: {
      color: theme.palette.primary.main
    },
    dialog: {
      "& .MuiPaper-elevation24": {
        boxShadow: "none !important"
      }
    },
    photo: {
      borderRadius: 4,
      maxHeight: 520,
      width: "100%"
    }
  })
);

export default useStylesBase;
