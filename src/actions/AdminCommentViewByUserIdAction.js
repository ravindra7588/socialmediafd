import axios from 'axios';

let AdminCommentViewByUserIdAction = (userprofile_id) => {
    console.log("in action",userprofile_id)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/api/admin/comment/user/${userprofile_id}`
            );
          
          dispatch({type: "VIEW_COMMENT_BY_USERID", payload: res.data});
    }
}

export default AdminCommentViewByUserIdAction;
