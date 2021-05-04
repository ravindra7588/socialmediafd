import axios from "axios";
let viewcommentsAction = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:8080/api/comments");

    dispatch({ type: "VIEW_COMMENT", payload: res.data });
  };
};

export default viewcommentsAction;