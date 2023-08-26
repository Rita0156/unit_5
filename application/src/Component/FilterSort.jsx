import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
function FilterSort(){
    

     const [searchParam,setSearchparam]=useSearchParams()
     
     const initialGenreParams =searchParam.getAll("genre")
     const [category,setCategory]=useState
     (initialGenreParams || []);

    function handleGenre(e){
       const option = e.target.value;
       let newCategory=[...option]
       if(category.includes(option)){
          newCategory.splice(newCategory.indexOf(option),1)
       }
       else{
          newCategory.push(option)
       }
       setCategory(newCategory)
    }

    useEffect(()=>{
        if(category){
           setSearchparam({genre:category})
        }
    },[category,setSearchparam])

    return (
        <div style={{border:"2px solid black"}}>
            <h1>Filter Section</h1>

            <div>
               <input type="checkbox" value="K-Pop" onChange={handleGenre} defaultChecked={category.includes('K-Pop')}/>
               <label>K-Pop</label>
            </div>
            <div>
               <input type="checkbox" value="Country" onChange={handleGenre} defaultChecked={category.includes('Country')}/>
               <label>Country</label>
            </div>
            <div>
               <input type="checkbox" value="Pop" onChange={handleGenre} defaultChecked={category.includes('Pop')}/>
               <label>Pop</label>
            </div>
            <div>
               <input type="checkbox" value="Holiday" onChange={handleGenre} defaultChecked={category.includes('Holiday')}/>
               <label>Holiday</label>
            </div>
            <div>
               <input type="checkbox" value="Heavy Metal" onChange={handleGenre} defaultChecked={category.includes('Heavy Metal')}/>
               <label>Heavy Metal</label>
            </div>
            

        </div>
    )
}
export default FilterSort