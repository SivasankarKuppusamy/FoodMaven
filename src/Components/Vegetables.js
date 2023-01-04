import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';


function Vegetables() {
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
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg' alt='tomato'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000066_25-fresho-cabbage.jpg' alt='Cabbage'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg' alt='onion'   style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg' alt='potato'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/20000745_5-fresho-bottle-gourd.jpg' alt='Bootle Guard'  style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000166_16-fresho-radish-white.jpg' alt='Raddish' className='bimg' style={{width:140}}/>
    </div>
    <div className='imgstext'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Tomato (Local , Organic)<br/><h3>1kg </h3><h4>MRP: Rs.20.50</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"0.5%"}}>Cabbage( Organic)<br/><h3>1 Pcs </h3><h4>MRP: Rs10</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"2%"}}>Onion(Local , Organic)<br/><h3>1kg </h3><h4>MRP: Rs.36.75</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"0%"}}>Potato(Local , Organic)<br/><h3>1kg </h3><h4>MRP: Rs.90</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Bottle Guard<br/><h3>1pc </h3><h4>MRP: Rs.39.50</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"6%"}}>Raddish<br/><h3>1kg </h3><h4>MRP: Rs.33</h4></Typography>
    </div>
    <div className='imgs1'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000143_14-fresho-ladies-finger.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000063_20-fresho-broccoli.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/10000060_21-fresho-brinjal-varikatri.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/10000070_15-fresho-carrot-orange.jpg' alt='' style={{width:140}}/>
    </div>
    <div className='imgs1text1'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Cauli Flower(Organic)<br/><h3>1 Pc </h3><h4>MRP: Rs.20</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"1%"}}>Fresho Lady's Finger(Local)<br/><h3>1kg </h3><h4>MRP: Rs.88.90</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Fresho Capsicum<br/><h3>1kg </h3><h4>MRP: Rs.76.30</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Brocolli<br/><h3>1 PC </h3><h4>MRP: Rs.41</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"5%"}}>Brinjal<br/><h3>1kg </h3><h4>MRP: Rs.45</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"6%"}}>Carrot<br/><h3>1kg </h3><h4>MRP: Rs.37.89</h4></Typography>
    </div>
    <div className='imgs2'>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/40202912_1-fresho-pumpkin-disco.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/10000046_17-fresho-beetroot.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/40036724_4-fresho-banana-stem-organically-grown.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/20000981_7-fresho-spring-onion-with-roots.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/10000089_19-fresho-coccinia.jpg' alt='' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/mm/10000039_7-fresho-beans-cluster.jpg' alt='' style={{width:140}}/>
    </div>
    <div className='imgs2text2'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Fresho Pumpkin<br/><h3>1 Pc </h3><h4>MRP: Rs.34</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"1%"}}>BeeRoot(Organic)<br/><h3>1kg </h3><h4>MRP: Rs.25</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Banana Stem<br/><h3>1 Pc </h3><h4>MRP: Rs.23</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"0.5%"}}>Spring Onion <br/><h3>1 Pc </h3><h4>MRP: Rs.15</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"2%"}}>Coccinia<br/><h3>1kg </h3><h4>MRP: Rs.134</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"6%"}}>Beans<br/><h3>1kg </h3><h4>MRP: Rs.65.50</h4></Typography>
    </div>
    </div>
    </>
  )
}

export default Vegetables;