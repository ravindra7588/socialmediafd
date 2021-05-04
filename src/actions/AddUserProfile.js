/* Axios is a library that helps us make http requests to external resources. */
import axios from 'axios';

let AddUserProfile = (userProfile) => {

     /*async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    return async function (dispatch) {

        await axios.post(
            "http://localhost:8080/api/userprofile",
            {
                about: userProfile.about,
                createdOn: userProfile.createdOn,
                gender: userProfile.gender,
                languages: userProfile.languages,
                profilePicUrl: userProfile.profilePicUrl
            },

            {
                /* This is use to automatically convert the request body into a JavaScript object */
                "Content-type": "application/json; charset=UTF-8"
            }
        ).then(response => {

            /*Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */
            console.log('Add post serverResponse: ', response.data);
            dispatch({ type: "ADD_USERPROFILE", payload: response.data });
        })
            .catch(
                error => {
                    console.log(error);
                }
            );


    }
}

export default AddUserProfile;


