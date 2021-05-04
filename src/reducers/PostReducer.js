const postReducer = (state = { initialState: [], filter: [], userlist: [] }, action) => {
    switch (action.type) {
        case 'ADD_POST':
            state.initialState.push(action.payload);
            return state;

        case 'PARTY_NAME':
            state.filter = action.payload;
            return state;
    
            case 'VIEW_POST':
                state.initialState=action.payload;
                return state;

                case 'SHOW_USERS':
                    state.userlist=action.payload;
                    return state;
        default:
            return [];
    }
}

export default postReducer;
