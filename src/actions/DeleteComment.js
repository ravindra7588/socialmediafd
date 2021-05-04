import axios from "axios";

const DeleteComment = (comment_id) => {
  return async function (dispatch) {
    const res = await axios.delete(
      `http://localhost:8080/api/comment/${comment_id}`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("Delete comment serverResponse: ", res.data);
    dispatch({ type: "DELETE_COMMENT", payload: res.data });
  };
};

export default DeleteComment;