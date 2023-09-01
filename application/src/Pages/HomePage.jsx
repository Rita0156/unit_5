import FilterSort from "../Component/FilterSort"
import MusicRecords from "./MusicRecord"
import styled from "styled-components"
import {getDataMusic} from "../Redux/action"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom"
function HomePage(){
    const data=useSelector((store)=>store.musicRecords)
    const dispatch=useDispatch();
    const [searchParam] = useSearchParams();
    const location=useLocation();
    

   useEffect(()=>{
    const sortBy=searchParam.get("sortBy")
       if(location || data.length===0){
        
        const quaryParam={
            params:{
            genre:searchParam.getAll("genre"),
            _sort:sortBy && "year",
            _order:sortBy
            }
        }

        dispatch(getDataMusic(quaryParam))
       }
   },[location.search])

    return (
        <div style={{display:"flex", width:"98%", margin:'auto'}}>
             <FilterSort style={{width:"20%",margin:"auto"}}/>
             <div style={{width:"80%",margin:"auto",display:"grid", gridTemplateColumns:"repeat(2,1fr)",gap:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"2rem"}}>
             {data.map((item)=>(
                <Link to={`/music/${item.id}`}>
                       <MusicRecords key={item.id} 
                          avt={item.img} 
                          nameE={item.name}
                          year={item.year}
                          genre={item.genre}
                        />
                </Link>
             ))}
             </div>
        </div>
    )

}
export default HomePage
//box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;