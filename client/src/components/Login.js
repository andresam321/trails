import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


// import bcrypt from ""

const LogIn = ()=> {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setErrors] = useState('') 
const navigate = useNavigate();


// useEffect(()=>{axios.post("http://localhost:8000/api/trails/login")
//     .then((res)=>{
//         console.log(res.data)
//         setEmail(res.data)
//         setPassword(res.data)
//     })
//     .catch((err)=>{console.log(err)
//     })



// }, [])

const submitForm = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/trails/login`,{email,password},{withCredentials:true})
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate('/trails/user');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
       
    }
    )
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.message)
    })
}

// function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }




    return(
    <body className='trails'>
        <div className='container'>
            <div className='title'>
                <header>
                    <h1>Trails</h1>
                    <h3>Relaxation Is A Step Away</h3>
                </header>
            </div>
            <div className='home'>
                <div>
                    <img className='pictureHome' src='https://www.fodors.com/wp-content/uploads/2020/09/02_ScenicBikePaths__GeorgeSMickelsonTrail_2-2788877995_cdce0d2db2_o.jpg' alt='George S. Mickelson Trail'/>
                </div>
                <p>{error?error:""}</p>
            
                <div className='login' >
                    <form className='info' onSubmit={submitForm}>
                        <div className='input'>
                        {
                            error.email?
                                <span>{error.email.message}</span>
                                :null
                        }
                            <label>Email: </label>
                            <input onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            type='text'
                            name='email'
                            />
                        </div>
                        <div className='input'>
                            <label>Password: </label>
                            <input onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            type='password'
                            name='password'
                            />
                        </div>
                        <button>Log In</button>
                        <br/>
                        <Link to={'trails/register'}>Register</Link>
                    </form>
                </div>
            </div>
            
            <footer>
                <p>Copyright © 2022 Maldonado, Inc,</p>
            </footer>
        </div>
    </body>
    )
}

export default LogIn;