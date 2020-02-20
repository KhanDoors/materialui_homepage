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
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2.5rem",
      color: "#115293"
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#115293"
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#9a0036"
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#9a0036"
    },
    learnButton: {
      borderColor: "#115293",
      color: "#115293",
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold"
    }
  }
});
