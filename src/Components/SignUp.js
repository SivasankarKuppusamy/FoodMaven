import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate=useNavigate();
   let Navotp=()=>{
    navigate("/otp")
    }
   let Navpay=()=>{
    navigate("/payment")
    }
  return (
    <div class="containe">
    <div class="content">
        <h1 class="card-title">Welcome!</h1>
        <small class="card-subtitle">Enter your credentials</small>
        <form class="card-form">
            <label for="username">Name</label>
            <div class="card-input-container username">
                <input type="text" placeholder="Enter your Name" id="username" />
            </div>
            <label for="password">Mobile Number</label>
            <div class="card-input-container password">
                <input type="tel" placeholder="Enter your Mobile Number" id="password"  required/>
            </div>
            <label for="password">Email</label>
            <div class="card-input-container password">
                <input type="email" placeholder="Email" id="password" />
            </div>
            <label for="password">Password</label>
            <div class="card-input-container password">
                <input type="password" placeholder="Enter your password" id="password" required/>
            </div>
            <label for="password">Confirm Password</label>
            <div class="card-input-container password">
                <input type="password" placeholder="Re-Enter your password" id="password" required />
            </div>
            <button onClick={Navotp} class="card-button">Get OTP</button>
           
        </form>
    </div>
</div>
  )
}
export default SignUp;