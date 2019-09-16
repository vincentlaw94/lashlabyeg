import { GET_AVAILABLETIME, RESET } from "../actions/types";
import moment from "moment-timezone";

//get data from mongodb
// get list of technicians
// get technician's treatments
// get technician's available dates

//user will select technician -> treatments -> technician's available dates.
// treatments have different durations
// user select dates -> return available times
//technician's booked times.
//google calendar api -> freebusy arrays.

const initialState = {
  availableTime: [],
  isEmpty: false
};

var currentTime = moment()
  .tz("America/Edmonton")
  .format();

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;

    case GET_AVAILABLETIME:
      var remove = [];
      for (let i = 0; i < action.payload.length; i++) {
        for (let j = 0; j < action.parsedTime.length; j++) {
          //action.payload[i].end >= action.parsedTime[j].start && action.payload[i].start <= action.parsedTime[j].end
          if (
            action.payload[i].end > action.parsedTime[j].start &&
            action.payload[i].start < action.parsedTime[j].end
          ) {
            remove.push(action.parsedTime[j]);
          }
        }
      }
      var selected = action.parsedTime.filter(function(element) {
        return remove.indexOf(element) === -1 && element.start >= currentTime;
      });
      var state1 = false;
      if (selected.length === 0) {
        state1 = true;
      }

      return {
        ...state,
        availableTime: selected,
        isEmpty: state1
      };
    default:
      return state;
  }
}
