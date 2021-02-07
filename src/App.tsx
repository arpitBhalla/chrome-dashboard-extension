/*global chrome*/
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Time from "./components/time";
import TimeTable from "./components/timetable";
import Grid from "@material-ui/core/Grid";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Grid container>
          <Grid item xs={12}>
            <Time />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            {/* <TimeTable /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
