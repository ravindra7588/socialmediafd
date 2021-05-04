import axios from 'axios';
const USERPROFILE_API_BASE_URL ="http://localhost:8080/api/admin/user";
const USERPROFILE_API_BASE_URL1 ="http://localhost:8081/api/admin/user";

class UserprofileService{
    getUsers(){
        return axios.get(USERPROFILE_API_BASE_URL);
    }
    createUser(user){
        return axios.post(USERPROFILE_API_BASE_URL,user);
    }
    getUserByuserprofile_id(userprofile_id){
        return axios.get(USERPROFILE_API_BASE_URL1 + '/' +userprofile_id);
    }
    getUserByuserName(userName){
        return axios.get(USERPROFILE_API_BASE_URL +"/name"+ '/' +userName)
    }
}
export default new UserprofileService()

