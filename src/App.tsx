/*global chrome*/
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Time from "./components/time";
import TimeTable from "./components/timetable";
import Grid from "@material-ui/core/Grid";
// import Quote from "./components/quote";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Grid container>
          <Grid item xs={6}>
            <Time />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h6" color="primary">
              Good Morning,
            </Typography>{" "}
            &nbsp;&nbsp;
            <Typography variant="h5" color="secondary">
              Arpit Bhalla
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TimeTable />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
