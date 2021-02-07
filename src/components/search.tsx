import { FcGoogle } from "react-icons/fc";
import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { onAnchorClick } from "../utils/functions";

interface topSites {
  title: string;
  url: string;
}
const Search = () => {
  const [q, setQ] = React.useState("");
  const [topSites, setTopSites] = React.useState<Array<topSites>>([]);

  React.useEffect(() => {
    let subs = true;
    if (process.env.DEV)
      setTopSites([{ title: "Google", url: "https://google.com" }]);
    //@ts-ignore
    else chrome.topSites.get(setTopSites);
    return () => {
      subs = false;
    };
  }, []);
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center">
        <TextField
          placeholder="Search here..."
          variant="outlined"
          value={q}
          onKeyDown={(e) => {
            if (e.key === "enter") onAnchorClick("https://google.com/q=" + q);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FcGoogle size="22" />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setQ(e.target.value)}
        />
      </Box>
      <Box m={2} display="flex">
        {topSites.map((e, i) => (
          <Box
            key={i}
            p={2}
            style={{ cursor: "pointer" }}
            onClick={() => onAnchorClick(e.url)}
            display="flex"
            width={"200px"}
            flexDirection="column"
            alignItems="center"
            borderRadius={2}
            m={1}
            border="1px solid #eee"
          >
            <Avatar>{e?.title?.[0]}</Avatar>
            <Typography variant="body1" color="textSecondary">
              {e.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {e?.url?.slice(0, 20)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Search;
