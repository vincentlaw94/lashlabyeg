import { INFO_SAVE,INFO_RESET } from '../actions/types';


const initialState= {
    flashType:""
}

export default function(state=initialState,action){
    switch(action.type){
        case INFO_SAVE:
        return {
        ...state,
        flashType: "saved",
    };
        case INFO_RESET:
            return {
                ...state,
                flashType: ""
            }
        default:
            return state;
    }
}
