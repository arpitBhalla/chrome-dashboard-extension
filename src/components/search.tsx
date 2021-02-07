import { FcGoogle } from "react-icons/fc";
import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const Search = () => {
  const [q, setQ] = React.useState("");
  return (
    <Box display="flex" justifyContent="center">
      <TextField
        placeholder="Search here..."
        variant="standard"
        value={q}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FcGoogle size="24" />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setQ(e.target.value)}
      />
    </Box>
  );
};

export default Search;
