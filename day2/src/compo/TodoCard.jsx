import { useState } from "react"


export default function TodoCard({avat,title,catgory,price,handalDelete,handalToggle}){
    //box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
   // const [toggle,setTog]=useState(true)
   // work is not complete
    const [tog,setDara]=useState("Not Done")
    function handalToggle(){
        let toggle="Not Done"
       if(tog=="Not Done"){
        setDara("Done")
        //toggle="Done"
       }
       else if (tog==="Done"){
         setDara("Not Done")
        // toggle="Not Done"
       }
    }

    return (
        <div style={{
            boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            padding :"2rem",
            display:"flex",
            flexDirection:"column",
            margin:"auto"
        }}>
            <img style={{width:"300px",height:"300px"}} src={avat}/>
            <h2>{title}</h2>
            <p>{catgory}</p>
            <h2> ${price}</h2>
            <div style={{
                display:"flex",
                width:"80%",
                justifyContent:"space-between"
            }} >
            <button style={{backgroundColor:"white",color:"black",border:"3px solid black", fontWeight:"bold", fontSize:"18px"}} onClick={handalToggle}>{tog}</button>
            <button style={{backgroundColor:"red",color:"white",border:"3px solid black", fontWeight:"bold", fontSize:"18px"}} onClick={handalDelete}>Delete</button>
            </div>
        </div>
    )
}