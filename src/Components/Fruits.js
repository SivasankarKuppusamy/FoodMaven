import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './Fruits.css';
function Fruits() {
  return (
    <>
  <div className='bg'>
  <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
  <IconButton color="inherit" id='spacing' aria-label="back">
  </IconButton>
    <div className='fimgs'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000025_27-fresho-banana-robusta.jpg' alt='banana' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/1222182_1-fresho-orange-nagpur-regular.jpg' alt='orange' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/30009286_7-fresho-blueberry.jpg' alt='blueberry' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg' alt='coconut' style={{width:140}}/>
    <Link to='/fruit2'><img src='https://www.bigbasket.com/media/uploads/p/s/20003956_2-fresho-baby-orange.jpg' alt='baby orange'  style={{width:140}}/></Link>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40120006_4-fresho-pomegranate-small.jpg' alt='pomegranate' className='fimg' style={{width:140}}/>
    </div>
    <div className='fimgstext'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Banana<br/><h3>A Dozen</h3><h4>Rs.100</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"4%"}}>Orange<br/><h3>Nagpur,Regular</h3><h4> Rs.50</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Blueberry<br/><h3>128g</h3><h4> Rs.380</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Coconut<br/><h3>Medium</h3><h4> Rs.100</h4></Typography>
   <Link to='/fruit2'> <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Baby Orange<br/><h3>(Loose)</h3><h4> Rs.90</h4></Typography></Link>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"4%"}}>Pomegranate<br/><h3>Refreshing</h3><h4> Rs.100</h4></Typography>
    </div>
    <div className='fimgs1'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/20000911_30-fresho-kiwi-green.jpg' alt='Kiwi' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000312_19-fresho-avocado.jpg' alt='Avacado' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40203347_2-fresho-mosambi-economy.jpg' alt='Masambi' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40174618_4-fresho-pear-beauty.jpg' alt='Pear berry' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000369_13-fresho-guava.jpg' alt='Guava' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40008982_15-fresho-dragon-fruit.jpg' alt='Dragon' style={{width:140}}/>
    </div>
    <div className='fimgs1text1'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Kiwi<br/><h3>A dozen</h3><h4>Rs.271(50g Jar)</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"2%"}}>Avacoda<br/><h4> Rs.140</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"5%"}}>Masambi<br/><h3>Economy-Loose</h3><h4>Rs.55</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Pear Berry<br/><h3>Pear Beauty</h3><h4>Rs.376</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"6%"}}>Guava<br/><h3>Loose</h3><h4>Rs.13</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"7%"}}>Dragon fruit<br/><h3>Loose</h3><h4>Rs.155</h4></Typography>
    </div>
    <div className='fimgs2'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000152_22-fresho-papaya-medium.jpg' alt='Papaya' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000181_12-fresho-sapota.jpg' alt='sapota' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000156_21-fresho-pineapple.jpg' alt='pine apple' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/30007415_11-fresho-plum-imported.jpg' alt='plum' style={{width:140}}/>
    <Link to='/fruit1'><img src='https://www.bigbasket.com/media/uploads/p/mm/40023482_8-fresho-watermelon-organically-grown.jpg' alt='Water melon' style={{width:140}}/></Link>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/20000727_13-fresho-dates-kimia-with-seed.jpg' alt='Dates' style={{width:140}}/>
    </div>
    <div className='fimgs2text2'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Papaya<br/><h3>A whole</h3><h4>Rs.160</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"7%"}}>Sapota<br/><h3>A Dozen</h3><h4> Rs.219</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"6%"}}>Pine apple<br/><h4>Rs.20</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"6%"}}>Plum<br/><h3>Imported</h3><h4>Rs.70</h4></Typography>
    <Link to='/fruit1'><Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"6%"}}>Water Melon<br/><h3>Organically Grown</h3><h4>Rs.33</h4></Typography></Link>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"7%"}}>Dates<br/><h3>With seed</h3><h4>Rs.48</h4></Typography>
    </div>
    </div>
    </>
  )
}

export default Fruits