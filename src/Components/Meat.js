import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './Meat.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


function Meat() {
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
    <div>
    <div className='bg'>
  <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
  <IconButton color="inherit" id='spacing' aria-label="back">
  </IconButton>
    <div className='mimgs'>
    <img src='https://assets.tendercuts.in/category/R/e/5428837f-7561-4fca-87a1-6ef16e93ff6d.jpg' alt='loading' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/category/C/h/444c122b-a639-48ff-8078-5b9b5af74596.jpg' alt='chicken' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/C/H/0b2422c9-12d1-4c13-bd96-9948ad114c97.webp' alt='drumstick' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/C/H/ea6fd0d8-8b05-4d97-9770-81522de0e43e.webp' alt='minced' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/C/H/d969fe79-9f6b-4613-af13-a990fdb2b248.jpg' alt='duck' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/G/T/2ce52567-a770-4b70-848f-c38f5e528c39.webp' alt='legcurry' style={{width:140}}/>
    </div>
    <div className='mimgstext'>
    <Typography variant='h6' sx={{fontSize:"15px"}}>Ready to cook chicken<br/><h3>1 kg</h3><h4>Rs.500</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"7%"}}>Chicken <br/><h3>1 kg</h3><h4> Rs.500</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"2%"}}>Chicken drumstick<br/><h3>1 kg</h3><h4> Rs.380</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"4%"}}>Minced chicken<br/><h3>1/2 kg</h3><h4> Rs.400</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"7%"}}>Duck cut<br/><h3>1 kg</h3><h4> Rs.300</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"4%"}}>Mutton leg cut<br/><h3>1 kg</h3><h4> Rs.400</h4></Typography>
    </div>
    <div className='mimgs1'>
    <img src='https://assets.tendercuts.in/product/G/T/7fe11e82-1428-44e2-acf8-9a69f7d253b2.webp' alt='mutton mince' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/g/t/abd7f36a-757d-44c3-94b6-e98116aea17f.jpg' alt='kidney' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/G/T/a4346b56-c071-40a2-b4b3-0085e23ad842.webp' alt='rib' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/G/T/a1982e0e-a199-4782-88a6-14400b4a44ed.jpg' alt='kapura' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/G/T/d71df405-20c7-4c6c-8fe5-1643d31dca9c.jpg' alt='tail' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/xxl/40188263_4-fresho-mutton-bones.jpg' alt='bone' style={{width:140}}/>
    
    </div>
    <div className='mimgs1text1'>
    <Typography variant='h6' sx={{fontSize:"15px"}}>Mutton mince<br/><h3>A dozen</h3><h4>Rs.270</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginLeft:"%"}}>Mutton kidney<br/><h4> Rs.240</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"2%"}}>Mutton Rib<br/><h3>1 Kg</h3><h4>Rs.550</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"%"}}>Mutton kapura<br/><h3>1 kg</h3><h4>Rs.376</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"3%"}}>Tail Meat<br/><h3>1 kg</h3><h4>Rs.130</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"7%"}}>Mutton bone<br/><h3>1 kg</h3><h4>Rs.155</h4></Typography>
    </div>
    <div className='mimgs2'>
    <img src='https://assets.tendercuts.in/product/S/F/9ed9bdc2-79da-4666-a09c-54593b6c1bad.webp' alt='prawn' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/S/F/942f54c9-b0cb-4002-b3dd-6bdf8f4bd5f7.webp' alt='sardine' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/S/F/b0bfb740-008b-46c5-83c3-34488ee5486b.webp' alt='sankara' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/S/F/dc2c5ff1-596c-4aec-bbce-290fa283b721.webp' alt='lady fish' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/S/F/92f7c23a-9844-47c1-b294-ad73d80c8693.webp' alt='crab' style={{width:140}}/>
    <img src='https://assets.tendercuts.in/product/S/F/15689b87-5df9-49d3-98b3-82a874df1930.webp' alt='squid' style={{width:140}}/>
    
    </div>
    <div className='mimgs2text2'>
    <Typography variant='h6' sx={{fontSize:"15px"}}>Prawn<br/><h3>1 kg</h3><h4>Rs.600</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginLeft:"2%"}}>Sardine<br/><h3>1 kg</h3><h4> Rs.900</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginLeft:"3%"}}>Sankara Fish<br/><h4>Rs.800</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"1%"}}>Lady Fish<br/><h3>1 kg</h3><h4>Rs.700</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"2%"}}>Crab<br/><h3>1 kg</h3><h4>Rs.853</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",marginRight:"10%"}}>Squid<br/><h3>1 kg</h3><h4>Rs.480</h4></Typography>
    </div>
    </div>
    </div>
  )
}

export default Meat