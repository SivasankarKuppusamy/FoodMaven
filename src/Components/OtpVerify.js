import React from 'react'
import './otp.css'
import { useNavigate } from "react-router-dom";

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
                  <h1>Please Enter OTP</h1>
              </div><br/>
        <form class="form-otp mb-4">
              <div class="form-group row">
                <div class="input-code">
                  <input type="text" id="otp-number-input-1" class="otp-number-input" maxlength="1"  numbers-only/>
                  <input type="text" id="otp-number-input-2" class="otp-number-input" maxlength="1"  numbers-only/>
                  <input type="text" id="otp-number-input-3" class="otp-number-input" maxlength="1"  numbers-only/>
                  <input type="text" id="otp-number-input-4" class="otp-number-input" maxlength="1" numbers-only/>
                  <input type="text" id="otp-number-input-5" class="otp-number-input" tabindex="5" maxlength="1" numbers-only/>
                  <input type="text" id="otp-number-input-6" class="otp-number-input" maxlength="1"  numbers-only/>
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