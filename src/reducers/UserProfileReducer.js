const userProfileReducer = (state = { initialState: [], filter: [], userlist: [] }, action) => {
    switch (action.type) {
        case 'ADD_USERPROFILE':
            state.initialState.push(action.payload);
            return state;

      
        default:
            return [];
    }
}

export default userProfileReducer;
