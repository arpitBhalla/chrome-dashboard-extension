import * as React from "react";
import { filterToday } from "../../utils/functions";
import timetable from "../../utils/timetable";
import SubjectBox from "./components/Box";
import Label from "./components/Label";
import Box from "@material-ui/core/Box";

const TimeTable: React.FC = () => {
  const TODAY = new Date();
  const TODAY_DAY = TODAY.getDay();
  // const nextDayTable: Array<Period> =
  //   (TODAY_DAY >= 5 || TODAY_DAY === 0 ? timetable[0] : timetable[TODAY_DAY]) ||
  //   [];

  const { upcommingPeriod, currentPeriod } = filterToday(
    timetable[TODAY_DAY - 1] || []
  );

  return (
    <Box p={2} bgcolor="#f1f1f133" borderRadius={3}>
      {currentPeriod && (
        <>
          <Label name="Ongoing" />
          <SubjectBox now={true} data={currentPeriod} />
        </>
      )}
      <br />
      {!!upcommingPeriod.length && <Label name="Later Today" />}
      {upcommingPeriod.map((period, i) => (
        <SubjectBox key={i} data={period} />
      ))}

      {/* {!!nextDayTable.length && (
        <Label
          name={TODAY_DAY >= 5 || TODAY_DAY === 0 ? "Monday" : "Next Day"}
        />
      )}

      {nextDayTable.map((period, i) => (
        <SubjectBox key={i} data={period} />
      ))} */}
    </Box>
  );
};

export default TimeTable;
