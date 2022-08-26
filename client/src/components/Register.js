import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Register= () =>{
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [errors,setErrors] = useState({})
    const [age, setAge]= useState('');
    const navigate = useNavigate();

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/register`,{firstName,lastName,email,password,confirmPassword,age})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAge('');
            setErrors({})
        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div className="container">
    
            <div className="title">
                <header>
                    <h1>Registration</h1>
                </header>
                <Link to={'/'}>Return to Log In</Link>
            </div>

            <div className="register">
                <form className="info" onSubmit={submitForm}>
                    <div className="input">
                        <label>First Name: </label>
                        <input onChange={(e)=>setFirstName(e.target.value)}
                        value={firstName}
                        name='First Name'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Last Name: </label>
                        <input onChange={(e)=>setLastName(e.target.value)}
                        value={lastName}
                        name='Last Name'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Age: </label>
                        <input onChange={(e)=>setAge(e.target.value)}
                        value={age}
                        name='age'
                        type='date'
                        />
                    </div>
                    <div className="input">
                        <label>Email: </label>
                        <input onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        name='email'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Password: </label>
                        <input onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        name='password'
                        type='password'
                        />
                    </div>
                    <div className="input">
                        <label>Confirm Password: </label>
                        <input onChange={(e)=>setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name='confirmPassword'
                        type='password'
                        placeholder='Enter Confirm Password'
                        />
                    </div>
                    <button>Submit</button>
                </form>
                </div>
                <div>
                    <img className="registerPic" src="https://cloudfront.traillink.com/photos/rincon-bike-trail_139202_hero.jpg" alt="Rincon Bike Trail"/>
                </div>
                <footer>
                    <p>Copyright © 2022 Maldonado, Inc,</p>
                </footer>
            
        </div>
    )
}

export default Register;