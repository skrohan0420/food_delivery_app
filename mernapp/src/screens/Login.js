import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

	const [userData, setUserData] = useState({
		"email": "",
		"password": ""
	})

	let navigate = useNavigate(); 

	const handleSubmit = async (e) => {
		e.preventDefault()
		const response = await fetch("http://localhost:5000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email": userData.email,
				"password": userData.password
			})

		})
		const json = await response.json()
		console.log(json)

		if (json.success) {
			localStorage.setItem("authToken", json.authToken)
			localStorage.setItem("userEmail", userData.email)
			console.log(localStorage.getItem('authToken'))
			navigate('/')
		}else{
			alert('Wrong Email or Password')

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
                        Login
                    </h1>
                </div>

         
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={userData.email} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={userData.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">login</button>
                <Link to="/sign-up" className='m-3 btn'>
                    sign-up
                </Link>
            </form>
            <Footer/>
        </div>
	)
}

export default Login