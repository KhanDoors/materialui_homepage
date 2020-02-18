import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      blue: "#115293",
      red: "#9a0036",
      teal: "#26a69a"
    },
    primary: {
      main: "#115293"
    },
    secondary: {
      main: "#9a0036"
    },
    action: {
      main: "#26a69a"
    }
  },
  typography: {
    tab: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      textTransform: "none",
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: "#115293"
    }
  }
});
