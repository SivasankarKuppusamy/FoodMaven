import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Payment.css'

function PaymentUpi() {
	const [upiid,Setupiid]=useState("");
	const [name,SetName]=useState("");
	const navigate =useNavigate();
	const handleSubmit=(event)=>{
		if(!(name.length==0||upiid.length==0)){
			navigate('/success')
		}
		else {
			event.preventDefault();
			alert("Enter Details")
		}
	}
	
  return (
    <div>
	<body><div class="checkout-panel">
	<div class="panel-body">
	  <h2 class="title">Payment</h2>
	  <Link to='/cart'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
	  <div class="payment-method">
		<label for="card" class="method card">
		 <div class="radio-input">
		 <Link to="/payment">
		 <input id="card" type="radio" name="payment"/>
			Pay With Card
			</Link>
		  </div>
		</label>
   
		<label for="paypal" class="method paypal">
		  <div class="radio-input">
			<input id="paypal" type="radio" name="payment"/>
			Pay with UPI
		  </div>
		</label>
		<label for="paypal" class="method paypal">
		  <div class="radio-input">
		  <Link to="/paymentcash">
		  <input id="paypal" type="radio" name="payment"/>
			Pay with Cash
			</Link>
		  </div>
		</label>
	  </div>
   
	  <div class="input-fields">
		<div class="column-1">
		  <label for="cardholder" >Enter Upi Id</label>
		  <input type="text" id="cardholder" onChange={(e)=>Setupiid(e.target.value)} />
		</div>
		<div class="column-2">
		  <label for="cardnumber" >Name</label>
		  <input type="password" onChange={(e)=>SetName(e.target.value)} id="cardnumber"/></div>
	  </div>
	  <div class="pay-button">
	  <Link to='/success'><input type="submit" onClick={handleSubmit} class="btnpay" value="Proceed To Pay"/></Link>
	  </div>
	
	 
	</div>
</div>
</body></div>
  )
}

export default PaymentUpi