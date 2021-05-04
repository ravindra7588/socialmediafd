import axios from 'axios';
let adminViewCommentsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/api/admin/comments"
          );
          
          dispatch({type: "VIEW_COMMENT_ADMIN", payload: res.data});
    }
}

export default adminViewCommentsAction;