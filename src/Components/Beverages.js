import { IconButton, Typography } from '@mui/material'
import React from 'react'
import './Beverages.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';


function Beverages() {
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
  return (
    <>
  <div className='bg'>
  <IconButton color="inherit" id='spacing' aria-label="back">
  </IconButton>
  <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
    <div className='imgs'>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/40222671_1-sprite-soft-drink-lime-flavoured.jpg' alt='sprite'  style={{width:140}}/>
    <img src='https://i5.walmartimages.com/asr/e44fd76d-47e9-465f-9d61-e17b24854ffb.3f91645f1e2dd4af00305c4c5f207515.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' alt='coca cola'  style={{width:140}}/>
    <img src='https://www.jiomart.com/images/product/600x600/490884929/bru-gold-instant-coffee-powder-100-g-product-images-o490884929-p590034147-0-202203170528.jpg' alt='bru'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/265680_11-kinley-sparkling-water-club-soda.jpg' alt='soda'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/40062834_6-3-roses-natural-care-tea.jpg' alt='3 roses' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/l/265725_12-maaza-juice-mango-refresh.jpg' alt='maaza' className='bimg' style={{width:140}}/>
    </div>
    <div className='imgstext'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Sprite<br/><h3>Soft Drink</h3><h4>MRP: Rs.100</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"6%"}}>Coca Cola<br/><h3>Soft Drink</h3><h4>MRP: Rs.50</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"7%"}}>Bru<br/><h3>Gold Premium Coffee</h3><h4>MRP: Rs.380</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Kinley<br/><h3>Sparkling Water</h3><h4>MRP: Rs.100</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"8%"}}>3 Roses<br/><h3>Dust Tea</h3><h4>MRP: Rs.90</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"2%"}}>Maaza<br/><h3>Juice-Refreshing</h3><h4>MRP: Rs.10</h4></Typography>
    </div>
    <div className='imgs1'>
    <img src='https://m.media-amazon.com/images/I/61H7ZKZXK+L._SL1500_.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/229792_15-tropicana-fruit-juice-delight-orange.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/m/40104660_2-raw-pressery-coconut-water-100-natural.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/266564_11-taj-mahal-tea.jpg' alt='' style={{width:140}}/>
    <img src='https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan.s3.amazonaws.com/164113/a242b38c-b1d1-43d0-bfda-5c73cbebf3c1/1622425123378-43286f83-2086-4e91-a5af-ea82c377db04.jpeg' alt='' style={{width:140}}/>
    <img src='https://www.netmeds.com/images/product-v1/600x600/13139/lipton_green_tea_100_gm_1_0.jpg' alt='' style={{width:140}}/>
    </div>
    <div className='imgs1text1'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Nescafe<br/><h3>Gold Blend Coffee</h3><h4>MRP: Rs.271(50g Jar)</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"1%"}}>Tropicana<br/><h3>100% Orange Juice</h3><h4>MRP: Rs.140</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Raw Pressery<br/><h3>Coconut Water</h3><h4>MRP: Rs.55</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Taj Mahal<br/><h3>Tea</h3><h4>MRP: Rs.376</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Appy Fizz<br/><h3>Apple Juice</h3><h4>MRP: Rs.13</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"6%"}}>Lipton<br/><h3>Green Tea</h3><h4>MRP: Rs.155</h4></Typography>
    </div>
    <div className='imgs2'>
    <img src='https://www.jiomart.com/images/product/original/490803034/red-bull-energy-drink-350-ml-can-product-images-o490803034-p490803034-0-202203152039.jpg' alt='' style={{width:140}}/>
    <img src='https://newassets.apollo247.com/pub/media/catalog/product/b/o/boo0003_7.jpg' alt='' style={{width:140}}/>
    <img src='https://www.jiomart.com/images/product/original/491373676/fanta-orange-250-ml-product-images-o491373676-p491373676-0-202203150114.jpg' alt='' style={{width:140}}/>
    <img src='https://www.jiomart.com/images/product/600x600/490537395/frooti-mango-drink-1-2-l-product-images-o490537395-p490537395-0-202203151819.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/40195155_2-mountain-dew-soft-drink.jpg' alt='' style={{width:140}}/>
    <img src='https://www.jiomart.com/images/product/600x600/491417098/tata-grand-filter-coffee-powder-100-g-product-images-o491417098-p590040958-0-202203150844.jpg' alt='' style={{width:140}}/>
    </div>
    <div className='imgs2text2'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Red Bull<br/><h3>Energy Drink</h3><h4>MRP: Rs.160</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"1%"}}>Boost<br/><h3>Nutrition Drink</h3><h4>MRP: Rs.219</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Fanta<br/><h3>Soft Drink</h3><h4>MRP: Rs.20</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"1%"}}>Frooti<br/><h3>Mango Drink</h3><h4>MRP: Rs.70</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"2%"}}>Mountain Dew<br/><h3>Soft Drink</h3><h4>MRP: Rs.33</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"1%"}}>Tata Coffee<br/><h3>Grand Filter Coffee</h3><h4>MRP: Rs.48</h4></Typography>
    </div>
    </div>
    </>
  )
}

export default Beverages;