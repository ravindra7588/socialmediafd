import axios from 'axios';

const adminCommentDeleteAction = (comment_id) => {
    return async function(dispatch) {
        const res = await axios.delete(
            `http://localhost:8080/api/admin/comment/${comment_id}`, { 
                headers: { 
                   
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete post serverResponse: ', res.data);
          dispatch({type:"ADMIN_DELETE_COMMENT", payload: res.data});

    }
}

export default adminCommentDeleteAction;
