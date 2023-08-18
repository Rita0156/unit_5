const intioal={
    todos:[],
    isLoading:false,
    isError:false
}
const reducer=(oldState=intioal,action)=>{
    const [type,payload]=action
    switch(action.type){
     
    case data.Get_Todos_Req : return {
        ...oldState,
        isError:false,
        isLoading:true
    }
    case data.Succ_Todos_Req : return {
        ...oldState,
        isError:false,
        isLoading:false
    }
    case data.Err_Todos_Req : return {
        ...oldState,
        isError:false,
        isLoading:false
    }
 
     default : return oldState;
    }
 }
 
 export {reducer};