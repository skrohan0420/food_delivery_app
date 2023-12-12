import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function SignUp() {

    const [userData , setUserData] = useState({
        "name" : "",
        "email" : "",
        "location": "",
        "password": ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/create-user",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "name" : userData.name,
                "email" : userData.email,
                "location": userData.location,
                "password": userData.password
            })

        })
        const json = await response.json()
        console.log(json)
        if(!json.success){
            alert('enter valid details')
        }
    }

    const onChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    return (
        <div className='container' style={{
            "display":"flex",
            "flexDirection": "column",
            "alignItems" : "center",
            "justifyContent": "center"
        }}>
            <form className='bg-dark p-5 mt-5' onSubmit={handleSubmit} style={{"width": "400px"}}>
                <div className="mb-3">
                    <h1 htmlFor="name" className="form-label">
                        Sign-Up
                    </h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={userData.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={userData.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={userData.password} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={userData.location} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">sign up</button>
                <Link to="/login" className='m-3 btn'>
                    Login
                </Link>
            </form>
            <Footer/>
        </div>
    )
}

export default SignUp