import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Payment.css'

function Paymentcard(props) {
	const [name,SetName]=useState("");
	const [cardnum,SetCardNum]=useState("");
	const [valid,SetValid]=useState("");
	const [cvv,SetCvv]=useState("");
	let navigate=useNavigate();
	const handleSubmit=(event)=>{
		if(name.length==0){
			alert("Enter Card Name");
		}
		else if(cardnum.length==0){
			alert("Enter Card Number");
		}
		else if(cvv.length==0){
			alert("Enter CVV");
		}
		else if(valid.length==0){
			alert("Enter Valid thru Deatils");
		}
		else if(valid.length!=5){
			alert("Enter Valid Thru Details Correctly")
		}
		else if(cvv.length!=3){
			alert("Enter Cvv Correctly")
		}
		else{
			navigate("/success")
		}
	}
  return (
    <body><div class="checkout-panel">
	<div class="panel-body">
	  <h2 class="title">Payment</h2>
	  <Link to='/cart'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
	  <div class="payment-method">
		<label for="card" class="method card">
		 <div class="radio-input">
			<input id="card" type="radio" name="payment"/>
			Pay with card
		  </div>
		</label>
   
		<label for="paypal" class="method paypal">
		  <div class="radio-input">
		  <Link to="/paymentupi">
		  <input id="paypal" type="radio" name="payment"/>
			Pay with UPI
			</Link>
		  </div>
		</label>
		<label for="paypal" class="method paypal">
			<div class="radio-input">
			<Link to="/paymentcash">
			  <input id="paypal" type="radio" name="payment"/>
			  Pay with Cash
			</Link></div>
		  </label>
	  </div>
   
	  <div class="input-fields">
		<div class="column-1">
		  <label for="cardholder">Cardholder's Name</label>
		  <input type="text" id="cardholder" onChange={(e)=>{SetName(e.target.value)}}/>
   
		  <div class="small-inputs">
			<div>
			  <label for="date">Valid thru</label>
			  <input type="text" id="date" onChange={(e)=>{SetValid(e.target.value)}} placeholder="MM / YY" maxlength="5"/>
			</div>
   
			<div>
			  <label for="verification">CVV / CVC *</label>
			  <input type="password" onChange={(e)=>{SetCvv(e.target.value)}} id="verification" maxlength="3"/>
			</div>
		  </div>
   
		</div>
		<div class="column-2">
		  <label for="cardnumber">Card Number</label>
		  <input type="text" id="cardnumber" onChange={(e)=>{SetCardNum(e.target.value)}} maxlength="16"/></div>
	  </div>
	  <div class="pay-button">
			<input type="submit" onClick={handleSubmit} class="btnpay" value="Proceed To Pay"/>
		</div>
	</div>
</div></body>
  )
}

export default Paymentcard