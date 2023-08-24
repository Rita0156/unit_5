
export default function Info(){
    return (
        <div style={{padding:"2rem", margin:'auto', backgroundColor:'gray'}}>
            <div style={{padding:"2rem",margin:'auto', backgroundColor:"white"}}>
                <h1>Login</h1>
                <div>
                    <div>

                    </div>
                    <input  type="number" placeholder="Mobile number"/>
                </div>
                <button style={{backgroundColor:'tomato',color:"white",border:"none", borderRadius:"7px", padding:"7px", fontSize:'18px', fontWeight:'bold'}}>Send One Time Password</button>
            </div>
        </div>
    )
}