import React from 'react'
import './Payment.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
function PaymentCash() {
	const [IsChecked, setIsChecked] = useState(false);
	const [temp,setTemp]=useState(false);
	const navigate=useNavigate();
	const handleChange = event => {
	  if (event.target.checked) {
		setTemp(true);
	  } else {
		alert('Checkbox is NOT Verified');
	  }
	  setIsChecked(current => !current);
	};
	const handleSubmit =() => {
	  if (temp) {
		navigate('/success')
	  } else {
		alert('Checkbox is NOT Verified');
	  }
	};
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
		<input type="checkbox"  onChange={handleChange}/> <p id="verify"> Click To verify</p>
	  </div>
	  <div class="pay-button">
	  <input type="submit" class="btnpay" onClick={handleSubmit} value="Proceed To Pay"/>
	  </div>
	
	 
	</div>
</div>
</body>
  )
}

export default PaymentCash