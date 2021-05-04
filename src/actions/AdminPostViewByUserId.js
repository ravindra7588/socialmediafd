import axios from 'axios';

let adminPostViewByUserId = (userprofile_id) => {
    console.log("in action",userprofile_id)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/api/admin/post/view/${userprofile_id}`
            );
          
          dispatch({type: "VIEW_POST_BY_USERID", payload: res.data});
    }
}

export default adminPostViewByUserId;
