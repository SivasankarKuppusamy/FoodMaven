import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './login.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [num,setNum]=useState("");
    const [pwd,setPwd]=useState("");
    const [cpwd,setCpwd]=useState("");
   let handleSubmit=(event)=>{
    
    if(name.length==0){
        event.preventDefault();
        alert("Enter name")
    }
    else if(num.length==0){
        event.preventDefault();
        alert("Enter Mobile Number")
    }
    else if(pwd.length==0){
        event.preventDefault();
        alert("Enter Password")
    }
    else if(pwd.length<=8){
        event.preventDefault();
        alert("Password Must be Greater than or Equals to 8")
    }
    else if(cpwd.length==0){
        event.preventDefault();
        alert("Enter Confirm Password")
    }
    else if(pwd!=cpwd){
        event.preventDefault();
        alert("Two passwords Must be Same!!")
    }
    else{
    navigate("/otp")
    }
}
const  showPwd=()=> {
var x=document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div class="containe">
    <div class="content">
	  <Link to='/login'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
        <h1 class="card-title">Welcome!</h1>
        <small class="card-subtitle">Enter your credentials</small>
        <form class="card-form">
            <label for="username">Name</label>
            <div class="card-input-container username">
                <input type="text" placeholder="Enter your Name" id="username" onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <label for="password">Mobile Number</label>
            <div class="card-input-container password">
                <input type="tel" pattern="[0-9]{3}" placeholder="Enter your Mobile Number" id="password" maxlength="10" onChange={(e)=>{setNum(e.target.value)}} />
            </div>
            <label for="password">Email</label>
            <div class="card-input-container password">
                <input type="email" placeholder="Email" id="password"  />
            </div>
            <label for="password">Password</label>
            <div class="card-input-container password">
                <input type="password" placeholder="Enter your password" id="password" onChange={(e)=>{setPwd(e.target.value)}} />
            </div>
            <VisibilityIcon id="eye1" onClick={showPwd} />
            <label for="password">Confirm Password</label>
            <div class="card-input-container password">
                <input type="password" placeholder="Re-Enter your password" id="pwd" onChange={(e)=>{setCpwd(e.target.value)}}  />
            </div>
            <button onClick={handleSubmit} class="card-button">Get OTP</button>
           
        </form>
    </div>
</div>
  )
}
export default SignUp;