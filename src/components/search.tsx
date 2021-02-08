import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const Search = () => {
  const [q, setQ] = React.useState("");

  return (
    <Box display="flex" p={1} justifyContent="center">
      <TextField
        autoFocus
        placeholder="Search here..."
        variant="outlined"
        value={q}
        style={{ backgroundColor: "#f1f1f144" }}
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter")
            //@ts-ignore
            chrome.search.query({
              disposition: "CURRENT_TAB",
              text: q,
            });
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                style={{ width: "20px" }}
                src={require("./../static/google.png")}
              />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setQ(e.target.value)}
      />
    </Box>
  );
};

export default Search;
