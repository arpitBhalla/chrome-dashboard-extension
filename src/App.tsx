/*global chrome*/
import * as React from "react";
import { filterToday } from "./utils/functions";
import timetable from "./utils/timetable";
import SubjectBox from "./components/Box";
import { Period } from "./types";
import Label from "./components/Label";

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
    </>
  );
};

export default App;
