import axios from 'axios';
let adminViewUerAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/api/admin/user"
          );
          
          dispatch({type: "VIEW_USER_ADMIN", payload: res.data});
    }
}

export default adminViewUerAction;