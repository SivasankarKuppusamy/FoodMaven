
import React, { useState } from 'react'
import './Address.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Address() {
  const [pin,setPin]=useState("");
  const [ph,setph]=useState("");
  const nav=useNavigate();
  const val=()=>{
    if(pin.length!=6){
    alert("Enter 6 digit Pincode");
     }
    if(ph.length==0){
    alert("Enter Phone Number");
     }
      else
    {
      nav("/payment");
    }
  }
  return (
    <div className='Container'>
    <br></br>
    <Link to='/cart'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
    <h2 id='abc'>Shipping Address </h2>
    <label className='ad'><b>DoorNo/Street: </b> </label>
    <input type="text" id="address" align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <label className='ci'><b>City:</b></label>
    <input type="text" id="city"></input>
    <br></br>
    <br></br>
    <label className='st'><b>State:</b></label>
    <input type="text" id="state"></input>
    <br></br>
    <label className='pi'><b>Pincode:</b></label>
    <input type="text" pattern="[0-9]+" maxlength='6' id="pincode" onChange={(e)=>{setPin(e.target.value)}}></input>
    <br></br>
    <br></br>
    <label className='cn'><b>Contact number:</b> </label>
    <input  type="text" id="number" maxlength='10' onChange={(e)=>{setph(e.target.value)}} align="center"></input>
    <br></br>
    <br></br>
    <br></br>
    <button id='br' onClick={val}>Procced to pay</button>
    </div>
  )
}
