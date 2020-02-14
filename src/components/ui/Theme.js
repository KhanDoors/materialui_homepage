import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      primary: "#115293",
      secondary: "#9a0036"
    },
    primary: {
      main: "#115293"
    },
    secondary: {
      main: "#9a0036"
    }
  },
  typography: {
    tab: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem"
    }
  }
});
