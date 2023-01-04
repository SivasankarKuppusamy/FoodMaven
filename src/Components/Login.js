import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
function Login() {
    const[username,setUsername]=useState("");
    const[pwd,setPassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length==0){
        alert("Enter Phone/email!")
      }
      else if(pwd.length==0){
        alert("Enter Password!")
      }
      else if(username!="User"||pwd!="User@1234"){
        alert("Wrong Username! Or Password")
      }
   else{
      navigate("/")
   }

}
const  showPwd=()=> {
  var x=document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

  return (
    <body>
    <div class="containe">
  <div class="content">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
        <h1 class="Title">Welcome!</h1>
	  <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>

        <small class="card-subtitle">Enter your credentials</small>
        <form class="card-form"  >
            <label for="username">Phone/Email</label>
            <div class="card-input-container username">
            <input  type="text" value={username} placeholder="Phone/Email" onChange={(e)=>setUsername(e.target.value)} ></input>
            <label for="password">Password</label>
            <div class="card-input-container password">
            <VisibilityIcon id="eye" onClick={showPwd} />
           <input type="password" placeholder="Password" id="pass" onChange={(e)=>setPassword(e.target.value)} ></input><br></br>
           </div>
            <button class="card-button" type="submit" onClick={formHandler}>Sign In</button>
            <small class="card-forgot-password">No Account? <Link to="/signup">Create One</Link></small><br/>
            <small class="card-forgot-password">Forgot your password ? <Link to="/forget">Reset Password</Link></small>
           </div>
        </form>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
</body>
  )
}

export default Login;