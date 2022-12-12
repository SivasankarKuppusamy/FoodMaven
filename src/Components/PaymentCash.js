import React from 'react'
import './Payment.css'
import { Link } from "react-router-dom";
function PaymentCash() {
  return (
    <body >
    
    <div class="checkout-panel">
	<div class="panel-body">
	  <h2 class="title">Payment</h2>
	  <Link to='/cart'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
   <div class="payment-method">
		<label for="card" class="method card">
		 <div class="radio-input">
		 <Link to="/payment" >
		 <input id="card" type="radio" name="payment"/>
			Pay With Card
			</Link>
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
		  <div class="radio-input"><Link to="/paymentcash">
			<input id="paypal" type="radio" name="payment"/>
			Pay with Cash
			</Link>
		  </div>
		</label>
	  </div>
   
	  <div class="input-fields">
		<input type="checkbox" /> <p id="verify"> Click To verify</p>
	  </div>
	  <div class="pay-button">
	  <Link to='/success'><input type="submit" class="btnpay" value="Proceed To Pay"/></Link>
	  </div>
	
	 
	</div>
</div>
</body>
  )
}

export default PaymentCash