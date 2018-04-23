/// <reference path="../typings/versa.d.ts" />
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import {locale} from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const displayedHours = document.getElementById("displayedHours");
const displayedMinutes = document.getElementById("displayedMinutes");
const displayedDate = document.getElementById("displayedDate");

// Update the <text> element every tick with the current time
clock.ontick = (evt :any) => {
  let today = evt.date;
  let hours: number = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    displayedHours.text = `${hours % 12 || 12}`;
  } else {
    // 24h format
    displayedHours.text = util.zeroPad(hours);
  }
  displayedMinutes.text = util.zeroPad(today.getMinutes());
  //displayedDate.text = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;
  displayedDate.text = today.toLocaleString(locale.language, { year:"", month: "short" });
}
