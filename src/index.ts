import { filterToday } from "./utils/functions";
import TIMETABLE from "./utils/timetable";

// function onAnchorClick(event) {
//   chrome.tabs.create({ url: event.srcElement.href });
//   return false;
// }

function buildPopupDom() {
  var popupDiv = document.getElementById("mostVisited_div");
  let dayTable = filterToday(TIMETABLE[0]).upcommingPeriod;
  console.log(dayTable);
  for (var i = 0; i < dayTable.length; i++) {
    var a = popupDiv.appendChild(document.createElement("div"));
    a.appendChild(
      document.createTextNode(
        `${dayTable[i].start}-${dayTable[i].end}     -> ${dayTable[i].code}`
      )
    );
  }
}
buildPopupDom();
