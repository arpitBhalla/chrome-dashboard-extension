import * as React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
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
  {
    title: "Google Maps",
    icon: require("../static/maps.png"),
    url: "https://maps.google.com",
  },
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

const TopSites = () => {
  return (
    <Grid container spacing={2}>
      {topSites.map((e, i) => (
        <Grid item key={i} xs={4}>
          <Box
            key={i}
            p={2}
            style={{ cursor: "pointer" }}
            onClick={() => onAnchorClick(e.url)}
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius={2}
            border="1px solid #eee"
          >
            <img
              src={e.icon}
              height="40"
              width="40"
              style={{ objectFit: "contain" }}
            />
            <Typography variant="body1" color="textSecondary">
              {e?.title?.slice(0, 20)}
            </Typography>
            {/* <Typography variant="caption" color="textSecondary">
              {e?.url?.slice(0, 20)}
            </Typography> */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopSites;
