import * as React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { onAnchorClick } from "../utils/functions";
import Grid from "@material-ui/core/Grid";
import {
  SiGoogle,
  SiGooglecalendar,
  SiGoogleclassroom,
  SiGoogledrive,
  SiGooglehangoutsmeet,
  SiGooglemaps,
  SiGoogletranslate,
  SiYoutube,
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
interface topSites {
  title: string;
  url: string;
  icon: React.FC;
}

let topSites: Array<topSites> = [
  { title: "Google", icon: SiGoogle, url: "https://www.google.co.in" },
  {
    title: "Google Calendar",
    icon: SiGooglecalendar,
    url: "https://calender.google.com",
  },
  {
    title: "Google Classroom",
    icon: SiGoogleclassroom,
    url: "classroom.google.com",
  },
  { title: "Google Drive", icon: SiGoogledrive, url: "drive.google.com" },
  { title: "Google Meet", icon: SiGooglehangoutsmeet, url: "meet.google.com" },
  { title: "Google Maps", icon: SiGooglemaps, url: "maps.google.com" },
  {
    title: "Google Translate",
    icon: SiGoogletranslate,
    url: "translate.google.com",
  },
  { title: "Youtube", icon: SiYoutube, url: "youtube.com" },
  { title: "Gmail", icon: SiGmail, url: "gmail.com" },
  { title: "Facebook", icon: SiFacebook, url: "fb.me" },
  { title: "Instagram", icon: SiInstagram, url: "instagram.com" },
  { title: "Linkedin", icon: SiLinkedin, url: "linkedin.com" },
  { title: "Twitter", icon: SiTwitter, url: "twitter.com" },
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
            <Avatar>{e?.title?.[0]}</Avatar>
            {<e.icon />}
            <Typography variant="body1" color="textSecondary">
              {e?.title?.slice(0, 20)}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {e?.url?.slice(0, 20)}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopSites;
