/* Axios is a library that helps us make http requests to external resources. */
import axios from 'axios';

let AddPost = (post) => {

     /*async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    return async function (dispatch) {

        await axios.post(
            "http://localhost:8080/api/post",
            {
                post_content: post.post_content,
                post_likes: post.post_likes,
                postedOn: post.postedOn,
                title: post.title,
                userProfile: {
                    "userprofile_id": post.userProfile.userprofile_id, "about": post.userProfile.about,
                    "createdOn": post.userProfile.createdOn, "gender": post.userProfile.gender,
                    "languages":post.userProfile.languages,"profile_pic_url":post.userProfile.profile_pic_url
                }
            },

            {
                /* This is use to automatically convert the request body into a JavaScript object */
                "Content-type": "application/json; charset=UTF-8"
            }
        ).then(response => {

            /*Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */
            console.log('Add post serverResponse: ', response.data);
            dispatch({ type: "ADD_POST", payload: response.data });
        })
            .catch(
                error => {
                    console.log("error Response:", error.response)
                    console.log("data:", error.response.data.message);
                    alert(error.response.data.message);
                }
            );


    }
}

export default AddPost;


