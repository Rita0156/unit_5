

export default function TodoCard({title,catgory,price,handalDelete,handalToggle}){


    return (
        <div>
            <h2>{title}</h2>
            <h2>{catgory}</h2>
            <h2>{price}</h2>
            <button style={{backgroundColor:"white",color:"black",border:"3px solid black", fontWeight:"bold", fontSize:"18px"}} onClick={handalToggle}></button>
            <button style={{backgroundColor:"red",color:"white",border:"3px solid black", fontWeight:"bold", fontSize:"18px"}} onClick={handalDelete}>Delete</button>
        </div>
    )
}