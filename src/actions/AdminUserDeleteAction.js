import axios from 'axios';

const adminUserDeleteAction = (userprofile_id) => {
    return async function(dispatch) {
        const res = await axios.delete(
            `http://localhost:8080/api/admin/user/${userprofile_id}`, { 
                headers: { 
                   
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete post serverResponse: ', res.data);
          dispatch({type:"ADMIN_DELETE_USER", payload: res.data});

    }
}

export default adminUserDeleteAction;
