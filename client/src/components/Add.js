import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Add= (props) =>{
    const [trailUser, setTrailUser]= useState('');
    const [trailName, setTrailName]= useState('');
    const [city, setCity]= useState('');
    const [state, setState]= useState('');
    const [zipCode, setZipCode]= useState('');
    const [date, setDate]= useState('');
    const [complete, setComplete]= useState('');
    const navigate = useNavigate();

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/trails`,{trailUser,trailName,city,state,zipCode,date,complete})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/trails/users');
            setTrailUser('');
            setTrailName('');
            setCity('');
            setState('');
            setZipCode('');
            setDate('');
            setComplete('');
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="container">
            <div className="title">
                <header>
                    <h1>Add A Trail</h1>
                </header>
                <Link to={'/trails/user'}>Return to Your Trails</Link>
            </div>
            <div className="register">
                <form className="info" onSubmit={submitForm}>
                <div className="input">
                        <label>Name: </label>
                        <input onChange={(e)=>setTrailUser(e.target.value)}
                        value={trailUser}
                        name='city'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Trail Name: </label>
                        <input onChange={(e)=>setTrailName(e.target.value)}
                        value={trailName}
                        name='trailName'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>City: </label>
                        <input onChange={(e)=>setCity(e.target.value)}
                        value={city}
                        name='city'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>State: </label>
                        <input onChange={(e)=>setState(e.target.value)}
                        value={state}
                        name='state'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Zip Code: </label>
                        <input onChange={(e)=>setZipCode(e.target.value)}
                        value={zipCode}
                        name='zipCode'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>date: </label>
                        <input onChange={(e)=>setDate(e.target.value)}
                        value={date}
                        name='date'
                        type='date'
                        />
                    </div>
                    <div className="input">
                        <label>Completed?</label>
                    <select value={complete} onChange={(e)=>setComplete(e.target.value)}>
        
                        <option value="yes">yes</option>
                        <option value="no">no</option>

                    </select>
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

export default Add;