import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/colorkhandoor.jpg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 40 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "1.5em",
    fontFamily: "Montserrat",
    color: "#9a0036"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <h1 className={classes.logo}>KhanDoor</h1>
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Khandoors" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="About Me" />
              <Tab className={classes.tab} label="Contact" />
            </Tabs>
            <Button variant="contained" color="secondary">
              Nothing Free
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;