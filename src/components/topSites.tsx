import * as React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { onAnchorClick } from "../utils/functions";
import Grid from "@material-ui/core/Grid";

interface topSites {
  title: string;
  url: string;
  icon: string;
}

let topSites: Array<topSites> = [
  {
    title: "Google",
    icon: require("../static/google.png"),
    url: "https://www.google.co.in",
  },

  {
    title: "Website",
    icon: require("./../static/logo.png"),
    url: "https://nitkkr.ac.in",
  },
  {
    title: "Google Classroom",
    icon: require("./../static/classroom.png"),
    url: "https://classroom.google.com",
  },
  {
    title: "Youtube",
    icon: require("../static/youtube.png"),
    url: "https://www.youtube.com",
  },
  {
    title: "Gmail",
    icon: require("../static/gmail.png"),
    url: "https://www.gmail.com",
  },
  {
    title: "Google Drive",
    icon: require("../static/drive.png"),
    url: "https://drive.google.com",
  },
  {
    title: "Google Meet",
    icon: require("../static/meet.png"),
    url: "https://meet.google.com",
  },
  // {
  //   title: "Google Maps",
  //   icon: require("../static/maps.png"),
  //   url: "https://maps.google.com",
  // },
  {
    title: "Google Calendar",
    icon: require("../static/calender.png"),
    url: "https://calender.google.com",
  },
  {
    title: "Google Translate",
    icon: require("../static/translate.png"),
    url: "https://translate.google.com",
  },

  // { title: "Facebook", icon: SiFacebook, url: "https://www.facebook.com" },
  // { title: "Instagram", icon: SiInstagram, url: "https://www.instagram.com" },
  // { title: "Linkedin", icon: SiLinkedin, url: "https://www.linkedin.com" },
  // { title: "Twitter", icon: SiTwitter, url: "https://www.twitter.com" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    transition: theme.transitions.create("background-color"),
    backgroundColor: "#f1f1f133",
    "&:hover": {
      backgroundColor: "#f1f1f188",
    },
  },
}));

const TopSites = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="stretch">
      {topSites.map((e, i) => (
        <Grid item key={i} xs={4}>
          <Box
            className={classes.root}
            key={i}
            p={2}
            style={{ cursor: "pointer" }}
            onClick={() => onAnchorClick(e.url)}
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius={2}
          >
            <img
              src={e.icon}
              height="50"
              width="50"
              style={{ objectFit: "contain" }}
            />
            <Typography variant="caption" align="center" color="textSecondary">
              <b>{e?.title?.slice(0, 20)}</b>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopSites;
