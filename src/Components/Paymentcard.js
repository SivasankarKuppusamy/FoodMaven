import React from 'react'
import { Link } from "react-router-dom";
import './Payment.css'

function Paymentcard(props) {
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
		  <input type="text" id="cardholder" />
   
		  <div class="small-inputs">
			<div>
			  <label for="date">Valid thru</label>
			  <input type="text" id="date" placeholder="MM / YY" />
			</div>
   
			<div>
			  <label for="verification">CVV / CVC *</label>
			  <input type="password" id="verification"/>
			</div>
		  </div>
   
		</div>
		<div class="column-2">
		  <label for="cardnumber">Card Number</label>
		  <input type="password" id="cardnumber"/></div>
	  </div>
	  <div class="pay-button">
			<Link to='/success'><input type="submit" class="btnpay" value="Proceed To Pay"/></Link>
		</div>
	</div>
</div></body>
  )
}

export default Paymentcard