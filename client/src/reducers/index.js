// this file combines all of the reducers as "reducers" which is pass to the store.
//the store contains 3 variables. (reducers, state, applyMiddleware)


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import flashMessageReducer from './flashMessageReducer';
import scheduleReducer from './scheduleReducer';
import technicianReducer from './technicianReducer';
import appointmentReducer from './appointmentReducer';
import messageReducer from './messageReducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    flashMessage:flashMessageReducer,
    schedule:scheduleReducer,
    technician:technicianReducer,
    appointment: appointmentReducer,
    message: messageReducer
});
