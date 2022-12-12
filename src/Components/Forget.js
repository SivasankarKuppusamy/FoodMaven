import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
function Forget() {
    const navigate=useNavigate();
   let Navreset=()=>{
    navigate("/otp")
    }
  return (
    <div class="container">
    <div class="content">
        <h1 class="card-title">Reset Password!</h1>
        <small class="card-subtitle">Enter Phone Number And Verify OTP!</small>
        <form class="card-form">
           <label for="password">Mobile Number</label>
            <div class="card-input-container password">
                <input type="tel" placeholder="Enter your Mobile Number" id="password" required />
            </div>
            <button onClick={Navreset} class="card-button">Get Otp</button>
        </form>
    </div>
</div>
  )
}
export default Forget;