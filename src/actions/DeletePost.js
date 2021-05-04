import axios from "axios";

const DeletePost = (post_id) => {
  return async function (dispatch) {
    const res = await axios.delete(
      `http://localhost:8080/api/post/${post_id}`,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log("Delete post serverResponse: ", res.data);
    dispatch({ type: "ADMIN_DELETE_POST", payload: res.data });
  };
};

export default DeletePost;