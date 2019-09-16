//reducer contains 2 arguments, initial state and the action

import { FETCH_USER } from "../actions/types";

export default function(state = [], action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;

    default:
      return state;
  }
}
