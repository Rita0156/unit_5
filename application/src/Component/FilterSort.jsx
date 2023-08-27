import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
function FilterSort(){
    

     const [searchParam,setSearchparam]=useSearchParams()
     
     const initialGenreParams =searchParam.getAll("genre")
     const [category,setCategory]=useState
     (initialGenreParams || []);
     
     const initialSortParams =searchParam.get("sortBy")
     const [sortBy,setSortBy]=useState(initialSortParams || "")

    function handleGenre(e){
       const option = e.target.value;
       let newCategory=[...category]
       if(category.includes(option)){
          newCategory.splice(newCategory.indexOf(option),1)
       }
       else{
          newCategory.push(option)
       }
       setCategory(newCategory)
    }

    function nandleSortBy(e){
      setSortBy(e.target.value)
    }

    useEffect(()=>{
        if(category || sortBy){
           setSearchparam({genre:category,
           sortBy:sortBy 
         })
           
        }
    },[category,setSearchparam,sortBy])

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

            <h1>Sort</h1>
            <div onChange={nandleSortBy}>
            <div>
              <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy==="asc"} />
              <label>Ascending</label>
            </div>
            <div>
              <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy==="desc"} />
              <label>Descending</label>
            </div>
            
            </div>

        </div>
    )
}
export default FilterSort