import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FAFAFA"
    },
    secondary: {
      main: "#BDBDBD"
    },
    background: {
      default: "#212121",
      paper: "#212121"
    },
    type: "dark"
  },
  typography: {
    fontFamily: "Times New Roman, Times, serif"
  }
});

export default theme;
