const reducer=(oldState,action)=>{
   switch(action.type){
    
   case "INCREMENT" : return {...oldState, count:oldState.count+action.payload}
   case "DECREMENT" : return {...oldState, count:oldState.count-action.payload}

    default : return oldState;
   }
}

export {reducer};