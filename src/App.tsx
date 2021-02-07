/*global chrome*/
import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Time from "./components/time";
import TimeTable from "./components/timetable";
import Grid from "@material-ui/core/Grid";
import Search from "./components/search";
import Greet from "./components/greet";
import Container from "@material-ui/core/Container";
import TopSites from "./components/topSites";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box p={2}>
        <Box display="flex" justifyContent="space-between">
          <Time />
          <Greet />
        </Box>
        <Container maxWidth="md">
          <Search />
        </Container>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="caption" color="textSecondary">
              TimeTable
            </Typography>
            <TimeTable />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" color="textSecondary">
              Top Sites
            </Typography>
            <TopSites />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
