import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './Fruit1.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Fruit1() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const imgs=[
    {id:0,value:"data:image/jpeg;base64,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"},
    {id:1,value:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shutterstock-watermelon-peppersmint-opener-1486070910.jpg?crop=1xw:0.786xh;center,top&resize=1200:*"},
    {id:2,value:"https://s.abcnews.com/images/Health/GTY_watermelon_jef_140703_16x9_1600.jpg"},
    {id:3,value:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsnnlpcoWTydyvlI3Sih6ulZCXs6u610hOw&usqp=CAU"},
];
const [slide,setSlide]=useState(imgs[0])
const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSlide(slider);
}
   return (
    <div class="bodyf">
   
    <Typography variant='h5' id="heading"><b>Fresho Watermelon</b></Typography>
    <div id='main'>
    <img src={slide.value} width="400" height="300" /></div>
    <div className='flex_row'> 
    {
    imgs.map((data,i)=>
    <div className='thumbnail' key={i}>
    <img className={slide.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="50" width="70"/>
    </div>
    )
    }
    <Link to='/fruits'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
    <p id="des">
    <b>Watermelon<br/>
    Price:150</b>
    </p>
    </div>
    <Typography variant='h6' id="description">
    Fresho Watermelon - Netted Small,<br/>1Pc 1.5kg.<br/><br/>
    MRP: Rs.150<br/><br/>
    Price: Rs.99.12(Rs.65/Kg)<br/><br/>
    You Save: 12%<br/>
    (Inclusive of all taxes)
</Typography>
<br/>
<div id='border'>
<img src="https://img.freepik.com/premium-vector/fast-delivery-truck-icon-fast-shipping-design-website-mobile-apps_97458-862.jpg?w=2000" alt="truck"  id="imgss" style={{width:80}}/> 
Fast Delivery
   <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="return" id="imgss" style={{width:40}}/> 
   No-return
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFP8TUnlxzUp80S8Hf1k0JsuZa8ZIc_Uepw&usqp=CAU" alt="alt" id="imgss" style={{width:50}}/> Free Delivery <br/>
    </div>
   
    <Typography>
    <Link to='/payment'><button id="buy">Buy Now</button></Link>
   <Link to='/cart'><button id="add" >Add to Cart</button></Link> 
    </Typography>
    </div>
    );
  }