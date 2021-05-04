import axios from 'axios';
let adminViewPostsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/api/admin/post"
          );
          
          dispatch({type: "VIEW_POST_ADMIN", payload: res.data});
    }
}

export default adminViewPostsAction;