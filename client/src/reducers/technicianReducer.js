import { FETCH_TECHNICIAN } from '../actions/types';



export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TECHNICIAN:
      return action.payload;
    default:
      return state;
  }
}
