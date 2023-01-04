import React from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate();
  let navf=()=>{
    navigate('/fruits')
  }
  let navv=()=>{
    navigate('/veg')
  }
  
  let navb=()=>{
    navigate('/bev')
  }

  return (
    <div id="body">
    <div>
    <div>
    
    <img className='bgg'src='https://media.istockphoto.com/id/1318059063/photo/world-environment-day-concept-green-grass-and-blue-sky-abstract-background-with-bokeh.jpg?b=1&s=170667a&w=0&k=20&c=jBo5ADIc7Hpy5mEd3eIj2a4H8JJjRYqyoAtDR4vdMbY=' alt="bg"></img>
    <h2 id='eop'>Explore  Our  Products</h2>
    <h2 id='sbc'>Shop By Category</h2>
    <img className='arrow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdruJOXATHW-O0LOA2-t_KcSOjjeAasJBcburzyooCuDDSm7gw6R_AjCKqyJc_Kr6S6qk&usqp=CAU" alt='drop'></img>
    <h3 className='text1' onClick={navf}>Fresh Fruits</h3>
    <img className='image1' onClick={navf} src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/08/best-fruits-1197259281-770x533-1-650x428.jpg" alt='Fruits'></img>
    <h3 className='text2' onClick={navv}>Vegetables</h3>
    <img className='image2' onClick={navv} src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6" alt='vegetables'></img>
    <Link to='/meat'><h3 className='text3'>Fish & Meat</h3>
    <img className='image3' src="https://d12eu00glpdtk2.cloudfront.net/public/images/local/_760x500_clip_center-center_none/shutterstock_472568125-1.jpg" alt='Fish & Meat'></img></Link>
    <h3 className='text4' onClick={navb}>Beverages</h3>
    <img className='image4' onClick={navb} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItkQiswZSaxEqKSvn6VTeHH7YzyKM4p4uhQ&usqp=CAU" alt='Beverages'></img>
   <Link to='/gro'> <h3 className='text5'>Groceries</h3>
    <img className='image5' src="https://i.insider.com/5e7ca73e14f18f4a4773db70?width=750&format=jpeg&auto=webp" alt='Groceries'></img></Link>
    </div>
    <div id="About">
    <h2 id="aboutus">AboutUs</h2><br/>
    <h3 id="fm">Food Maven</h3><br/>
    <h4 id='qn'>What is Food Maven?</h4>
    <h5 id='content'>
    It is an online food and grocery store. With quality products and over fabulous brands in our catalogue you will find everything you are looking for. 
    Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep, anywhere.
    You can pay online using your debit / credit card or by cash on delivery.We guarantee on time delivery, and the best quality!
    </h5><br/>
    <h2 id="hs">Happy Shopping!!</h2>
    </div>
    </div>
    </div>
  )
}
