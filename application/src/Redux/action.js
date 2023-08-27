
import * as types from "./actionType";
import axios from "axios";

export const getDataMusic=(params)=>(dispatch)=>{
     dispatch({type:types.GET_DATA_REQUEST}) 
   return axios.get(`http://localhost:8080/albums`,params)
    .then((d)=>{
        return dispatch({
            type:types.GET_DATA_SUCCESS,
            payLoad:d.data
        })
    })
    .catch((e)=>{
        return dispatch({
            type:types.GET_DATA_FAILURE
        })
    })
}
//export {}
