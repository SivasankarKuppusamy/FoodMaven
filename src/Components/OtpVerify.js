import React from 'react'
import './otp.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function OtpVerify() {
  const navigate=useNavigate();
  let navHome=()=>{
    navigate("/")
}
  return (
       <div class="containe">
        <div class="row">
          <div class="content">
              <div class="content-head">
	  <Link to='/signup'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
                  <h1>Please Enter OTP</h1>
              </div><br/>
        <form class="form-otp mb-4">
              <div class="form-group row">
                <div class="input-code">
                 <input type="text" maxlength="1"></input>
                 <input type="text" maxlength="1"></input>
                 <input type="text" maxlength="1"></input>
                 <input type="text" maxlength="1"></input>
                </div>
              </div>
            </form>
            <button onClick={navHome}  class="verify-btn" >Verify</button>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        </div>
  )
}

export default OtpVerify