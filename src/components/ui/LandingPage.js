import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./../../utils/ButtonArrow";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  animation: {
    // maxWidth: "50em",
    // minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%"
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.red,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: ".9rem",
    height: 45,
    width: 145
  },
  mainContainer: {
    marginTop: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em,"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em,"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Khandoors "The Cutting Edge of Development"
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Consultation
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More </span>
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.red}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
