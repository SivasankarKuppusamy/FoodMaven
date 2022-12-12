import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Fruit2.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingPage1() {
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
    {id:0,value:"https://www.healthifyme.com/blog/wp-content/uploads/2020/12/Orange.jpg"},
    {id:1,value:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/orange-juice01.jpg"},
    {id:2,value:"https://d1z88p83zuviay.cloudfront.net/ProductVariantImages/f016ff21-4618-4858-94cd-b5b6e71e3771.jpg"},
    {id:3,value:"https://media.istockphoto.com/id/501395870/photo/fresh-slice-orange.jpg?s=612x612&w=0&k=20&c=OT-1Lkigtd-5tGrcs_B68Kh8VlvFeDsEqmWG7hnq7Vc="},
];
const [slide,setSlide]=useState(imgs[0])
const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSlide(slider);
}
   return (
    <>
    <Typography variant='h5' id="heading"><b>Fresho Baby Orange</b></Typography>
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
    Baby Orange<br/>
    Price:75.20
    </p>
    </div>
    <Typography variant='h6' id="description">
    Fresho Baby Orange, 4 Pcs.<br/><br/>
    MRP: Rs.90.12<br/><br/>
    Price: Rs.82.12(Rs.18.80/count)<br/><br/>
    You Save: 5%<br/>
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
    <Link to='/cart'><button id="add">Add to Cart</button></Link>
    </Typography>
    </>
    );
  }