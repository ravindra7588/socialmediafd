import {GET_PROJECTS,DELETE_FRIEND,ACCEPT_REQUEST} from "../actions/types";

const initialState ={
    projects:[],
    project:{}
};

export default function(state=initialState,action){
    switch(action.type)
    {
       case GET_PROJECTS:
           return{
           ...state,
           projects:action.payload
           };
        case DELETE_FRIEND:
            return{
                ...state,
                 projects:state.projects.filter(project=>project.user.userId !== action.payload)
            }
        case ACCEPT_REQUEST:
            return{
                ...state,
                projects:state.projects.filter(project=>project.user.userId !== action.payload)
            }
        default:
        return state;
    }

}