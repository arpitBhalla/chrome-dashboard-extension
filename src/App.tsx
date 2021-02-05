/*global chrome*/
import * as React from "react";
import { filterToday } from "./utils/functions";
import timetable from "./utils/timetable";
import SubjectBox from "./components/Box";
import { Period } from "./types";
import Label from "./components/Label";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const App: React.FC = () => {
  const TODAY = new Date();
  const TODAY_DAY = TODAY.getDay();
  const nextDayTable: Array<Period> =
    (TODAY_DAY >= 5 || TODAY_DAY === 0 ? timetable[0] : timetable[TODAY_DAY]) ||
    [];
  const { upcommingPeriod, currentPeriod } = filterToday(
    timetable[TODAY_DAY - 1]
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6">ME-01 (2019-23)</Typography>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        {currentPeriod && (
          <>
            <Label name="Ongoing" />
            <SubjectBox now={true} data={currentPeriod} />
          </>
        )}
        {!!upcommingPeriod.length && <Label name="Later Today" />}
        {upcommingPeriod.map((period, i) => (
          <SubjectBox key={i} data={period} />
        ))}

        {!!nextDayTable.length && <Label name="Next Day" />}

        {nextDayTable.map((period, i) => (
          <SubjectBox key={i} data={period} />
        ))}
      </Box>
    </>
  );
};

export default App;
