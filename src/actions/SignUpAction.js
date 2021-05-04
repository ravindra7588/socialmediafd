import axios from 'axios';
import { GET_ERRORS, GET_USER } from './type';

export const addUser = (user, history) => async dispatch => {

    try {
        const res = await axios.post("http://localhost:8080/api/register", user);
        history.push("/Login");
       
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getUser = (user, history) => async (dispatch) => {
    try {
        let emailId = user.emailId;
        let password = user.password;
        if (emailId === 'admin@gmail.com' && password === 'admin') {
            console.log(user);
            history.push("/admindashboard");
        }
        else {
            const re = await axios.get("http://localhost:8080/api/login/" + emailId + "/" + password);
            console.log(re.data);
            if(re.data==='valid'){
                history.push("/userdashboard");
            }
            else{
                alert("Type correct details")
            }
            dispatch({
                type:GET_USER,
                payload:re.data
            })
        }
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data

        });
    }
}
