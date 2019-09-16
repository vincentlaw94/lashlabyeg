//action creator is store the methods in this application.
//action creator requires 2 arguments; action type, action creators
//it can be access when you this.props.fetchUser()

import axios from "axios";
import moment from "moment";
import {
  FETCH_USER,
  USER_REGISTER,
  FAIL_LOGIN,
  FETCH_TECHNICIAN,
  GET_AVAILABLETIME,
  RESET,
  FETCH_APPOINTMENT,
  INFO_SAVE
} from "./types";

export const fetchUser = () => async dispatch => {
  //return {}
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitForm = (values, history) => async dispatch => {
  const res = await axios.post("/api/signup", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
  dispatch({ type: USER_REGISTER });
};

export const submitLogin = (values, history) => dispatch => {
  //console.log(values)
  axios
    .post("/api/login", values)
    .then(res => {
      history.push("/onlinebooking");
    })
    .catch(error => {
      dispatch({ type: FAIL_LOGIN });
    });
};

export const submitAuthForm = (values, history) => async dispatch => {
  //console.log(values)

  axios
    .post("/api/form", values)
    .then(res => {
      history.push("/onlinebooking");
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(error => {});
};
export const submitUpdate = values => async dispatch => {
  axios
    .post("/api/update", values)
    .then(res => {
      dispatch({ type: INFO_SAVE });
    })
    .catch(err => {});
};
export const getAvailableTime = (date, tech, treatment) => async dispatch => {
  dispatch({ type: RESET });
  var newDate = moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");

  //parsing time
  var times = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30"
  ];
  var parsedTime = [];
  for (let i = 0; i < times.length; i++) {
    var startTime = moment(
      newDate + "T" + times[i] + ":00.00",
      "YYYY-MM-DDTHH:mm:ss.SS"
    );
    var endTime = startTime.add(treatment, "hours");

    var ret = {
      start: startTime._i + "-06:00",
      end: endTime.format("YYYY-MM-DDTHH:mm:ss.SS") + "-06:00",
      parsed: true
    };
    parsedTime.push(ret);
  }

  //
  axios
    .get("/api/calendar", {
      params: {
        timeMin: newDate + "T00:00:00.00" + "-06:00",
        timeMax: newDate + "T23:59:00.00" + "-06:00",
        technician: tech
      }
    })
    .then(res => {
      dispatch({
        type: GET_AVAILABLETIME,
        payload: res.data,
        parsedTime: parsedTime
      });
    })
    .catch(error => {});
};

export const resetAvailableTime = () => async dispatch => {
  dispatch({ type: RESET });
};

export const cancelAppointment = values => async dispatch => {
  axios
    .post("/api/refund", values)
    .then(res => {})
    .catch(error => {});
};

export const addTechnician = () => async dispatch => {
  axios
    .post("/api/technician")
    .then(res => {})
    .catch(error => {});
};

export const fetchAppointment = () => async dispatch => {
  const res = await axios.get("/api/appointment");
  dispatch({ type: FETCH_APPOINTMENT, payload: res.data });
};

export const fetchTechnician = () => async dispatch => {
  const res = await axios.get("/api/technician");
  dispatch({ type: FETCH_TECHNICIAN, payload: res.data });
};
