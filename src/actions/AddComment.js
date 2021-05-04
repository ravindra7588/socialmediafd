/* Axios is a library that helps us make http requests to external resources. */
import axios from "axios";

let AddComment = (comment) => {
  /*async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
  return async function (dispatch) {
    await axios
      .post(
        "http://localhost:8080/api/comment",
        {
          comment_content: comment.comment_content,
          comment_likes: comment.comment_likes,
          commentedOn: comment.commentedOn,
          post: {"post_id": comment.post.post_id},
          userProfile: {"userprofile_id": comment.userProfile.userprofile_id}
         
        },

        {
          /* This is use to automatically convert the request body into a JavaScript object */
          "Content-type": "application/json; charset=UTF-8",
        }
      )
      .then((response) => {
        /*Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */
        console.log("Add comment serverResponse: ", response.data);
        dispatch({ type: "ADD_COMMENT", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default AddComment;