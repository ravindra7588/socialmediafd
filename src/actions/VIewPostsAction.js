import axios from 'axios';
let viewPostsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/api/posts"
          );
          
          dispatch({type: "VIEW_POST", payload: res.data});
    }
}

export default viewPostsAction;