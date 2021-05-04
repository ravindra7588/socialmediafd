import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/api" ;

export function findFriendRequest(userId) 
{
    return axios.get(USER_API_BASE_URL+"/friend1"+"/"+userId);
  
}


export function findFriendList(userId) 
{
    return axios.get(USER_API_BASE_URL+"/friend"+"/"+userId);
  
}
export function deleteRequests(id,id2)
{
    return axios.delete(`http://localhost:8080/api/friend/${id}/${id2}`);
}