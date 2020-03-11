import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const DrawerWidth: number = 180;

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
        letterSpacing: "0.00938em",
        margin: 0
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
      flexGrow: 1,
      paddingRight: DrawerWidth,
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(8),
        paddingRight: 0
      }
    },
    dateText: {
      fontSize: "0.75rem !important"
    },
    drawer: {
      width: DrawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      borderRight: "unset",
      width: DrawerWidth
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
    photoDialog: {
      display: "flex",
      margin: "auto",
      maxHeight: 678
    },
    padding: {
      padding: theme.spacing(3)
    }
  })
);

export default useStylesBase;
