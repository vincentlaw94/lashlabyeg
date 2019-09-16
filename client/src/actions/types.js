//Types are passed into the action creator to create an object which are dispatched to the store. which change the states of the app.
// is called upon the reducers. the reducers change the state store depending on the action types
//

//authRuducer
export const FETCH_USER = 'FETCH_USER';
export const FETCH_WAIVER = 'FETCH_WAIVER';

//flashMessageReducer
export const USER_REGISTER ='USER_REGISTER';
export const FAIL_LOGIN = 'FAIL_LOGIN';
export const VERIFY_EMAIL= 'VERIFY_EMAIL';

//appointmentReducer
export const FETCH_APPOINTMENT ='FETCH_APPOINTMENT'

//technicianReducer
export const FETCH_TECHNICIAN = "FETCH_TECHNICIAN";

//scheduleReducer
export const GET_AVAILABLETIME = 'GET_AVAILABLETIME';
export const RESET = 'RESET'

//MessageReducer
export const INFO_SAVE = 'INFO_SAVE';
export const INFO_RESET ='INFO_RESET'
