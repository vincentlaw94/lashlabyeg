import { USER_REGISTER,FAIL_LOGIN,VERIFY_EMAIL } from '../actions/types';


const initialState= {
    flashType:""
}

export default function(state=initialState,action){
    switch(action.type){
        case USER_REGISTER:

        return {
        ...state,
        flashType: "registrationComplete",
    };
        case VERIFY_EMAIL:
            return {
                ...state,
                flashType: "verifyEmail"
            }
        case FAIL_LOGIN:
            return {
                ...state,
                flashType:'failLogin'
            }

        default:
            return state;
    }
}
