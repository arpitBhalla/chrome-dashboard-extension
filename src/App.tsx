/*global chrome*/
import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Time from "./components/time";
import TimeTable from "./components/timetable";
import Grid from "@material-ui/core/Grid";
import Search from "./components/search";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Box display="flex" justifyContent="space-between">
          <Time />
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <TimeTable />
          </Grid>
          <Grid item xs={6}>
            <Search />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
