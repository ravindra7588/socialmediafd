import axios from 'axios';

let UserProfileViewByUserNameAction = (userprofile_name) => {
    console.log("in action",userprofile_name)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/api/admin/user/name/${userprofile_name}`
            );
          
          dispatch({type: "VIEW_USERPROFILE_BY_USERNAME", payload: res.data});
    }
}

export default UserProfileViewByUserNameAction;
