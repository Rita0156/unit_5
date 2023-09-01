import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {getDataMusic} from "../Redux/AppReducer/action"
   



   function SingleMusicRecord(){
    
      const [currentId,setCurrentId]=useState({})
      const {id}=useParams()
      const data=useSelector((store)=>store.musicRecords)
      const dispatch=useDispatch()

      useEffect(()=>{
          if(data.length===0){
              dispatch(getDataMusic())
          }
      },[data.length,dispatch])

      useEffect(()=>{
        
          if(id){
            const currentMusic=data.find((item)=>item.id===id);
            currentMusic && setCurrentId(currentMusic)
          }
      },[id,data])

     return (
        <div>
            <h1>{currentId.name}</h1>
            <img src={currentId.img}/>
            <h1>{currentId.artist}</h1>
            <h3>{currentId.year}</h3>

        </div>
     )
   }
   export default SingleMusicRecord