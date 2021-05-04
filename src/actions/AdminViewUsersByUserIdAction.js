import axios from 'axios';

let AdminUserViewByUserIdAction = (userprofile_id) => {
    console.log("in action",userprofile_id)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/api/admin/user/${userprofile_id}`
            );
          
          dispatch({type: "VIEW_USER_BY_USERID", payload: res.data});
    }
}

export default AdminUserViewByUserIdAction;
