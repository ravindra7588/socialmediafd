import axios from "axios";
import {GET_PROJECTS,DELETE_FRIEND,ACCEPT_REQUEST,ADDREQUEST}  from "./types";

export const getFriends = (id)=> async dispatch =>{
    const res = await  axios.get(`http://localhost:8080/api/friend1/${id}`) ;
   
    dispatch ({
        type: GET_PROJECTS,
        payload:res.data
    });
};


export const deleteFriends =(id,id2)=> async dispatch =>{
    
    await axios.delete(`http://localhost:8080/api/friend/${id}/${id2}`);
    dispatch({
        type:DELETE_FRIEND,
        payload:id

    });
};

export const acceptREQUEST=(id,id2)=> async dispatch =>{
    await axios.put(`http://localhost:8080/api/friend/${id}/${id2}`);
    dispatch({
        type:ACCEPT_REQUEST,
        payload:id
    });
};
export const addREQUEST=(usersend,userrecevier,friend,history)=> async dispatch=>{
    
  const res=  await axios.post(`http://localhost:8080/api/friend/${usersend}/${userrecevier}`,friend);
        if(res.data==false){
            alert("already send a request");
        }
        else{
           
         history.push("/search");
         alert("Friend request send successfully");
        }
    
    dispatch({
          type:ADDREQUEST,
          payload:res.data
    })

}