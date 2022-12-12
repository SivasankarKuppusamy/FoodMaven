import React from 'react'
import './Success.css'
import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <div id="success">
   <img src="https://tse2.mm.bing.net/th?id=OIP.L79p8oJlmhcr2bA8V9mFjwHaHa&pid=Api&P=0" alt="" align="center" width="200"></img>
       <h1>Yay! Your Order Placed</h1>
       <Link to='/payment'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
       <br></br>
       <h2>Your order has been successfully processed!</h2>
       <br></br>
       <h2>Ordernumber : 5025</h2>
       <br></br>
       <Link to='/'><button class='home'>Return to Home</button></Link><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
  }
