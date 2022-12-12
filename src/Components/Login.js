import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length == 0 || password.length == 0 || !(username=="Admin" || password=="Admin@1234") ){
        setError(true);
      }

    if(username && password ){
      const loginObj={
          uname:username,
          pass:password
      }
    }
   if(error){
      navigate("/")
   }

}

  return (
    <body>
    <div class="containe">
  <div class="content">
        <h1 class="Title">Welcome!</h1>
        <small class="card-subtitle">Enter your credentials</small>
        <form class="card-form" onSubmit={formHandler} >
            <label for="username">Phone/Email</label>
            <div class="card-input-container username">
            <input  type="text" value={username} placeholder="Phone/Email" onChange={(e)=>setUsername(e.target.value)} ></input>
            <div> {error&&username!="Admin"? <label style={{color:"red"}}>Wrong Username</label>:""}</div>
           <div> {error&&username.length==0? <label style={{color:"red"}}>Username is Required</label>:""}</div>
            </div>
            <label for="password">Password</label>
            <div class="card-input-container password">
           <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} ></input><br></br>
            </div>
            <div>{
              error&&password.length==0? <label style={{color:"red"}}>Password is Required</label>:""
            }</div>
            {error && !(password=="Admin@1234")? <label style={{color:"red"}}>Wrong Password</label>:""}
            <button class="card-button" type="submit" >Sign In</button>
            <small class="card-forgot-password">No Account? <Link to="/signup">Create One</Link></small>
            <small class="card-forgot-password">Forgot your password ? <Link to="/forget">Reset Password</Link></small>
           
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