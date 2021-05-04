import axios from 'axios';

let adminPostViewByPostId = (post_id) => {
    console.log("in action",post_id)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/api/admin/post/${post_id}`
            );
          
          dispatch({type: "VIEW_POST_BY_POSTID", payload: res.data});
    }
}

export default adminPostViewByPostId;
