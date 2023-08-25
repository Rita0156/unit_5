import React, { useEffect } from "react";
import ProfileDataRow from "../Components/ProfileDataRow";
import axios from "axios"

import  {getRequest,getSuccess,getFailure} from "../Redux/action"
import {shallowEqual, useDispatch, useSelector} from "react-redux"

const Homepage = () => {
  const dispatch = useDispatch()
  const alldata=useSelector((store)=>{
    
     return store.profileData
  },shallowEqual
    
)
//console.log(alldata)

 function dataStore(){
  dispatch(getRequest())
  fetch(`http://localhost:8080/profile`)
  .then((res)=>{
    return res.json()
  })
  .then((d)=>{
    console.log(d)
    dispatch(getSuccess(d))
  })
   .catch((e)=>{
    console.log(e)
        dispatch(getFailure(e))
   })
 }

 useEffect(()=>{
     dataStore()
 },[])


  return (
    <div>
      <table border="2px solid black" style={{margin:"auto", border:'2px solid black'}}>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          {
            alldata.length > 0 && alldata.map((profile)=>(
              <ProfileDataRow profile={profile}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
