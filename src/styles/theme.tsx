import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#BDBDBD"
    },
    background: {
      default: "#FAFAFA",
      paper: "#FAFAFA"
    }
  },
  typography: {
    fontFamily: "Times New Roman, Times, serif"
  }
});

export default theme;
