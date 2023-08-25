// Write the action object creators in this file

import * as types from "./actionTypes"


const getRequest =()=>{
    return {type:types.GET_PROFILE_DETAILS_REQUEST}
}

const getSuccess =(payLoad)=>{
  return {
    type: types.GET_PROFILE_DETAILS_SUCCESS,
    payLoad
  }
}
const getFailure=()=>{
    return {type:types.GET_PROFILE_DETAILS_FAILURE}
}

export {
    getRequest,
    getSuccess,
    getFailure
}