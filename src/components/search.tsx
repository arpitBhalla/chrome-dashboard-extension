import { FcGoogle } from "react-icons/fc";
import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { onAnchorClick } from "../utils/functions";

const Search = () => {
  const [q, setQ] = React.useState("");

  return (
    <Box display="flex" p={1} justifyContent="center">
      <TextField
        autoFocus
        placeholder="Search here..."
        variant="outlined"
        value={q}
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter")
            onAnchorClick("https://google.com/search?q=" + q);
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
  );
};

export default Search;
