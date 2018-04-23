/// <reference path="../typings/versa.d.ts" />
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt :any) => {
  let today = evt.date;
  let hours: number = today.getHours();
  let displayedHours: string;
  let displayedMinutes: string;
  if (preferences.clockDisplay === "12h") {
    // 12h format
    displayedHours = `${hours % 12 || 12}`;
  } else {
    // 24h format
    displayedHours = util.zeroPad(hours);
  }
  displayedMinutes = util.zeroPad(today.getMinutes());
  myLabel.text = `${displayedHours}:${displayedMinutes}`;
}
