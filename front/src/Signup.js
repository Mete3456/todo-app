import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sValidation from './SignupValidation'; 


function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        console.log("values", values);
        console.log("errors", errors); 
        event.preventDefault();
        setErrors(sValidation(values));
        
        if(Object.keys(errors).length === 0 || (values.name === "" || values.email === "" || values.password === "")) {
            console.log("No errors, proceeding with signup");
            fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
            })
            .then(response => {
            if (response.ok) {
                navigate("/");
            } else {
                return response.json().then(err => {
                console.log(err);
                });
            }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className = "d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className = "bg-light p-3 rounded w-25">
                <form action = "" onSubmit={handleSubmit}>
                    <div className =  "mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder='Enter Name' name = "name"  onChange = {handleInput}className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className =  "mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Enter Email' name= "email" onChange = {handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className =  "mb-3">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder='Enter Password' name = "password" onChange = {handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type = "submit" className = "btn btn-success w-100"> Sign up</button>
                    
                    <Link to="/" className = "btn btn-default border w-100 bg-light text-decleration-none">Log in</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;