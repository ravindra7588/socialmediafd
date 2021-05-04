const CommentReducer = (
    state = { initialState: [], filter: [], userlist: [], postlist: [] },
    action
  ) => {
    switch (action.type) {
      case "ADD_COMMENT":
        state.initialState.push(action.payload);
        return state;
  
      case "PARTY_NAME":
        state.filter = action.payload;
        return state;
  
      case "VIEW_COMMENT":
        state.initialState = action.payload;
        return state;
  
      case "SHOW_USERS":
        state.userlist = action.payload;
        return state;
      case "VIEW_POSTS":
        state.postlist = action.payload;
        return state;
      default:
        return [];
    }
  };
  
  export default CommentReducer;