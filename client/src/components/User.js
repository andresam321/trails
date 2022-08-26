import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
const User = ({isLoggedin, setIsLoggedin}) =>{

    const [oneTrail,setOneTrail] = useState([])
    const {id} = useParams();
    const [user, setUser] = useState(null)
    const navigate= useNavigate()


useEffect(()=>{axios.get(`http://localhost:8080/api/trail/${id}`, {withCredentials:true})
    .then((res)=>{
        console.log(res)
        console.log(res.data)
        setOneTrail(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}, [id])
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
        console.log(res.data)
        navigate("/")
    })
    .catch((err)=> console.log(err))
}



    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Welcome</h1>
                    <div>
                    <div>{ user ? <div>
                    <label> Name</label>
                    <p>Hello {user.firstName}</p>
                    <p>Hello {user.password}</p>
                     <button onClick={handleLogout}>Logout</button>
                    </div>:<div></div>}</div>
                </div>
                </header>
            </div>
                <h2>Your Trails</h2>
            <div className='data'>
                <table className="table">
                    <thead className="thead">
                        <tr>
                        <th >Name of Trail</th>
                        <th >Location</th>
                        <th >Completed (Y/N)</th>
                        <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>{oneTrail.trailName}</th>
                        <td>{oneTrail.state}</td>
                        <td>{oneTrail.complete}</td>
                        <td>{oneTrail.data}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='links'>
                <Link to={'/trails/users'}>View Other Users</Link>
                <Link to={'/trails/add'}>Add a Trail</Link>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    )
}

export default User;