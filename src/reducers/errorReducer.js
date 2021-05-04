import {ADDREQUEST} from "../actions/types";

const initialstate={};

export default function(state=initialstate,action){
    switch(action.type){
        case ADDREQUEST:
            return action.payload;

        default:
            return state
    }
}