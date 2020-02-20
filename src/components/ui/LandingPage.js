import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./../../utils/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import khandoor from "../../assets/colorkhandoor.jpg";
import infokhandoor from "../../assets/cowboyslogo.jpg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    ...theme.typography.learnButton,
    fontSize: ".9rem",
    height: 45,
    width: 145
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 45,
    width: 145,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
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
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  khandoorBackground: {
    backgroundImage: `url(${khandoor})`,
    backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  khandoorCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: "0",
      paddingRight: "0"
    }
  },
  infoBackground: {
    backgroundImage: `url(${infokhandoor})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Customer Software Developement</Typography>
            <Typography variant="subtitle1">Let's get Wild</Typography>
            <Typography variant="subtitle1">Fortune Favors the Bold</Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="customsoftwareicon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Mobile App Developement</Typography>
            <Typography variant="subtitle1">Living Fast</Typography>
            <Typography variant="subtitle1">
              ... on the Go!{matchesSM ? null : <br />}
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobilephoneicon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">Website Developement</Typography>
            <Typography variant="subtitle1">Think Differently</Typography>
            <Typography variant="subtitle1">...and be Uinque</Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={websiteIcon} alt="websiteIcon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.khandoorCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h2" gutterBottom>
                    Khandoors
                  </Typography>
                  <Typography variant="subtitle1">Seek and Survive</Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      height={15}
                      width={15}
                      fill={theme.palette.common.red}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.khandoorBackground} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container style={{ height: "100em" }} alignItems="center">
          <Grid item container style={{ position: "absolute" }}>
            <Grid item sm style={{ marginLeft: "5em" }}>
              <Grid container direction="column">
                <Typography variant="h2">About Us</Typography>
                <Typography variant="subtitle2">The Deets</Typography>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButton}>
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm style={{ marginRight: "5em", textAlign: "right" }}>
              <Grid container direction="column">
                <Typography variant="h2">Contact Us</Typography>
                <Typography variant="subtitle2">Let's get Together</Typography>
                <Grid item>
                  <Button variant="outlined" className={classes.learnButton}>
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
