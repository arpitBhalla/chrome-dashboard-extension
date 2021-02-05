/*global chrome*/
import * as React from "react";
import { filterToday } from "./utils/functions";
import TIMETABLE from "./utils/timetable";
import SubjectBox from "./components/Box";

const App: React.FC = () => {
  let { currentPeriod, upcommingPeriod } = filterToday(TIMETABLE[0]);
  return (
    <>
      {upcommingPeriod.map((p, i) => (
        <SubjectBox key={i} data={p} />
      ))}
    </>
  );
};

export default App;
