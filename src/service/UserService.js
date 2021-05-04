import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/api" ;



    export function register(newUser) 
    {
        return axios.post(USER_API_BASE_URL+"/register",newUser);
    }

    export function loginUser(loginCredentials)
    {
        return axios.get(USER_API_BASE_URL+"/login/"+loginCredentials.emailId+"/"+loginCredentials.password);
    }

    export function getUserByEmailId(emailId)
    {
        return axios.get(USER_API_BASE_URL+'/'+emailId);
    }


