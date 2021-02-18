import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Time from "./components/time";
import TimeTable from "./components/timetable";
import Grid from "@material-ui/core/Grid";
import Greet from "./components/greet";
import Container from "@material-ui/core/Container";
import Search from "./components/search";
import TopSites from "./components/topSites";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />

      <Box
        px={2}
        pt={2}
        style={{
          height: "100%",
          minHeight: "100vh",
          background: `url(${require("./static/back.jpg")})`,
          backgroundSize: "cover",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Time />
          <Greet />
        </Box>
        <Container maxWidth="sm">
          <Search />
        </Container>
        <Container maxWidth="lg">
          <Box p={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={7}>
                <Typography variant="caption" color="textSecondary">
                  TimeTable
                </Typography>
                <TimeTable />
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <Typography variant="caption" color="textSecondary">
                  Top Sites
                </Typography>
                <TopSites />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box display="flex" justifyContent="center">
          <Typography variant="caption" color="textSecondary">
            Made By Arpit Bhalla
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default App;
