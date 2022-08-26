import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Users = (props) =>{

const [useTrails, setUseTrails] = useState([])
// const {id} = useParams();



useEffect(()=>{axios.get("http://localhost:8000/api/trails",{withCredentials:true})
    .then((res)=>{
        setUseTrails(res.data)
    })
    .catch((err)=>{console.log(err)
    })

}, [])

const deleteInput = (id)=>{
  axios.delete(`http://localhost:8000/api/trail/${id}`)
  .then((res)=>{
    console.log(res)
    console.log("success deleting input", res)
    const filteredInputs = useTrails.filter((input)=>{
      return input._id !== id;
        })

        setUseTrails(filteredInputs)
  })
  .catch((err)=>{console.log(err)
  console.log("error in deleting input", err)
})
}


    return(
        <div className='container'>
            <div>
                <header className='title'>
                    <h1>Viewing All Users</h1>
                </header>
            </div>
            <div className='data'>
                <table className="table">
                    <thead className="thead">
                        <tr>
                        <th >Name</th>
                        <th >Trail Name</th>
                        <th >Age</th>
                        <th ># of Trails Completed</th>
                        <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {useTrails.map((trail,index)=>(
                    
                        <tr key ={trail._id}>
                        <th >{trail.trailUser}</th>
                        <th >{trail.trailName}</th>
                        <td>{trail.date}</td>
                        <td>{trail.numOfTrails}</td>
                        {/* <td>{trail.createdBy}</td> */}
                        <td><button><Link to={`/trail/user/${trail._id}`}>View</Link></button>
                         <button onClick={()=> deleteInput(trail._id)}>Delete</button></td>
                        
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
           
            </div>

            <div className='links'>
                <Link to={'/trails/user'}>View Your Trails</Link>
                <Link to={'/trails/add'}>Add a Trail</Link>
            </div>
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    )
}

export default Users;