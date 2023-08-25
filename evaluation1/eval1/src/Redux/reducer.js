import * as types from "./actionTypes"
const initialState = {
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState,action) => {
    const {type,payLoad}=action
    switch(type){
     
      case types.GET_PROFILE_DETAILS_REQUEST :return{
         ...oldState,
         isLoading:true,
         isError:false
      }

      case types.GET_PROFILE_DETAILS_SUCCESS:return{
        ...oldState,
        profileData:[...payLoad],
        isLoading:false,
        isError:false
      }
      case types.GET_PROFILE_DETAILS_FAILURE:return{
        ...oldState,
        isLoading:false,
        isError:true
      }
     default: return oldState
     
    }

  return oldState;
};

export { reducer };
