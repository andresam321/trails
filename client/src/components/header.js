import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';

const header = ({isLoggedin, setIsLoggedin}) => {

const [user, setUser] = useState(null)


useEffect(()=>{
    axios.get("http://localhost:8000/api/current-user", {withCredentials:true})
    .then((res)=>{
        setUser(res.data)
    })
    .catch((err)=> console.log(err))
}, [isLoggedin])


const handleLogout = () =>{
    axios.post("http://localhost:8000/api/logout",{}, {withCredentials:true})
    .then((res)=>{
        setUser(null)
    })
    .catch((err)=> console.log(err))
}


  return (
    <div>
        <div>
        <div>{ user ? <div>
            <label>User Name</label>
            <p>Hello {user.username}</p>
            <button onClick={handleLogout}>Logout</button>
            </div>:<div></div>}</div>
        </div>
        
    </div>
  )
}

export default header