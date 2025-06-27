import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lValidation from './LoginValidation';


function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(lValidation(values));
        if (Object.keys(errors).length === 0 || (errors.email === "" && errors.password === "")) {
            fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
            })
            .then(async response => {
            const data = await response.json();

            if (response.ok) {
                if (data === "Login Successful") {
                navigate("/home");
                }
            } else {
                alert("Login failed");
                setErrors({ general: "An error occurred. Please try again." });
                setTimeout(() => setErrors(prev => ({ ...prev, general: undefined })), 3000);
            }
            })
            .catch(() => {
            setErrors({ general: "An error occurred. Please try again." });
            setTimeout(() => setErrors(prev => ({ ...prev, general: undefined })), 3000);
            });
        }
        
    }

    return(
        <div className = "d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className = "bg-light p-3 rounded w-25">
                <form action = "" onSubmit={handleSubmit}>
                    <div className =  "mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Enter Email' name  = "email" onChange = {handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className =  "mb-3">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder='Enter Password' name = "password" onChange = {handleInput}  className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type = "submit" className = "btn btn-success w-100"> Log in</button>
                    
                    <Link to="/signup" className = "btn btn-default border w-100 bg-light text-decleration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}


export default Login;