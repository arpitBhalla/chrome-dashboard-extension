import * as React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { onAnchorClick } from "../utils/functions";
import Grid from "@material-ui/core/Grid";

interface topSites {
  title: string;
  url: string;
}
const TopSites = () => {
  const [topSites, setTopSites] = React.useState<Array<topSites>>([]);

  React.useEffect(() => {
    let subs = true;
    if (process.env.DEV || process.env.NODE_ENV === "development")
      setTopSites(
        [...new Array(20)].fill({ title: "Google", url: "https://google.com" })
      );
    //@ts-ignore
    else chrome.topSites.get(setTopSites);
    return () => {
      subs = false;
    };
  }, []);
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
