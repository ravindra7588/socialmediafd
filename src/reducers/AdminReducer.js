const adminReducer = (state={initialState:[],filter:[]}, action) => {
    switch(action.type) {
        case 'VIEW_POST_ADMIN':
            state.initialState=action.payload;
            return state;
        case 'VIEW_POST_BY_USERID':
                console.log("reducer")
               state.initialState= action.payload;
                return state;
        case 'VIEW_POST_ALL_USERID':
                    console.log("reducer")
                   state.filter= action.payload;
                    return state;
         case 'ADMIN_DELETE_POST':
                        state.initialState = action.payload;
                        return state;
        case 'VIEW_POST_BY_POSTID': 
                state.initialState = action.payload;
                return state;
        case 'VIEW_COMMENT_ADMIN':
               state.initialState=action.payload;
               return state;
        case 'VIEW_COMMENT_BY_USERID':
                console.log("reducer")
               state.initialState= action.payload;
                return state;
        case 'VIEW_COMMENT_ALL_USERID':
                    console.log("reducer")
                   state.filter= action.payload;
                    return state;
         case 'ADMIN_DELETE_COMMENT':
                        state.initialState = action.payload;
                        return state;

        case 'VIEW_USER_ADMIN':
                       state.initialState=action.payload;
                            return state;
        case 'VIEW_USER_BY_USERID':
                             console.log("reducer")
                            state.initialState= action.payload;
                             return state;
         case 'VIEW_ALL_USERID':
                                 console.log("reducer")
                                state.filter= action.payload;
                                 return state;
         case 'ADMIN_DELETE_USER':
                                 state.initialState = action.payload;
                                 return state;
        default:
            return [];
    }
}
export default adminReducer;