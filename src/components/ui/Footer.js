import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    height: "13em",
    zIndex: 1302,
    position: "relative"
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: ".75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "2em",
    width: "2em"
  },
  socialContainer: {
    position: "absolute",
    marginTop: "7em",
    right: "1.5em"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/khandoors"
                className={classes.link}
              >
                Khandoors
              </Grid>
              <Grid
                item
                component={Link}
                to="/khandoors"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/khandoors"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/khandoors"
                className={classes.link}
              >
                Technique
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link}>
                About US
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact US
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener no referrer"
          target="_blank"
        >
          <FacebookIcon className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.github.com"
          rel="noopener no referrer"
          target="_blank"
        >
          <GitHubIcon className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.linkedin.com"
          rel="noopener no referrer"
          target="_blank"
        >
          <LinkedInIcon className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
