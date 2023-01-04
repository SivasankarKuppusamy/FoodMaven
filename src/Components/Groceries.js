import { IconButton, Typography } from '@mui/material'
import React from 'react'
import './Gro.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';


function Groceries() {

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
  return(
    <>
  <div className='bg'>
  <IconButton color="inherit" id='spacing' aria-label="back">
  </IconButton>
    <div className='gimgs'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40030810_8-bb-royal-mustardrai-small.jpg' alt='mustard seeds' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40168521_6-bb-royal-organic-black-pepperkali-mirchi.jpg' alt='pepper' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40133694_7-bb-popular-fennelsaunf-small.jpg' alt='fennel seeds' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/30000233_6-bb-royal-wheat-sharbati.jpg' alt='wheat' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40203922_1-bb-royal-organic-urad-dal-black-split.jpg' alt='black gram' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/10000800_14-bb-royal-fried-grambengal-gram.jpg' alt='bengal gram' style={{width:140}}/>
    </div>
    <div className='gimgstext'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Mustard seeds<br></br><h4><b>1 kg</b><br></br></h4><h4>Rs.80</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"%"}}>Pepper <br></br><h4><b>500g</b><br></br></h4><h4>Rs.508</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginLeft:"4%"}}>Fennal seeds<br></br><h4><b>100g</b><br></br></h4><h4>Rs.44</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"4%"}}>Wheat<br></br><h4><b>2 kg</b><br></br></h4><h4>Rs.118</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"1%"}}>Black gram<br></br><h4><b>500g</b><br></br></h4><h4>Rs.135</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"-3%"}}>Bengal gram<br></br><h4><b>1 kg</b><br></br></h4><h4>Rs.119</h4></Typography>
    </div>
    <div className='gimgs1'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40067275_3-bb-popular-fenugreekmethi.jpg' alt='fenugreek' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40019827_7-catch-turmeric-powder.jpg' alt='tumeric' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/278286_7-mtr-chilli-powder-stemless.jpg' alt='chilli' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/241601_8-tata-salt-lite-15-low-sodium-iodised-salt.jpg' style={{width:140}}/>
    <img  src='https://www.bigbasket.com/media/uploads/p/s/40168523_9-bb-royal-organic-coriander-powder.jpg' alt='coriander' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40196255_7-saffola-pure-honey.jpg' alt='honey' style={{width:140}}/>
    </div>
    <div className='gimgs1text1'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Fenugreek Seeds<br></br><h4><b>100g</b><br></br></h4><h4>Rs.24</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Turmeric Powder<br></br><h4><b>500g</b><br></br></h4><h4>Rs.117</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"2%"}}>Chilli Powder<br></br><h4><b>500g</b><br></br></h4><h4>Rs.275</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"7%"}}>Salt<br></br><h4><b>500g</b><br></br></h4><h4>Rs.62</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Coriander powder<br></br><h4><b>500g</b><br></br></h4><h4>Rs.164</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"10%"}}>Honey<br></br><h4><b>500g</b><br></br></h4><h4>Rs.218</h4></Typography>
    </div>
    <div className='gimgs2'>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40013920_6-mr-gold-groundnut-oil.jpg' alt='oil' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40071222_5-bb-royal-jaggery-powdernattu-sakkarai.jpg' alt='jaggery' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg' alt='sugar' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40119174_13-aashirvaad-svasti-cow-ghee.jpg' alt='ghee' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40159993_4-super-saver-ordinary-sooji-bombay-rava.jpg' alt='rava' style={{width:140}}/>
    <img src='https://www.bigbasket.com/media/uploads/p/s/40132873_2-parachute-pure-coconut-oil.jpg' alt='coconut oil' style={{width:140}}/>
    </div>
    <div className='gimgs2text2'>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey"}}>Groundnut oil<br></br><h4><b>500g</b><br></br></h4><h4>Rs.225</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"3%"}}>Jaggery<br></br><h4><b>500g</b><br></br></h4><h4>Rs.100</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"4%"}}>Sugar<br></br><h4><b>5 kg</b><br></br></h4><h4>Rs.220</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"4%"}}>Ghee<br></br><h4><b>1 ltr</b><br></br></h4><h4>Rs.854</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"4%"}}>Rava<br></br><h4><b>500g</b><br></br></h4><h4>Rs.335</h4></Typography>
    <Typography variant='h6' sx={{fontSize:"15px",color:"grey",marginRight:"8%"}}>Coconut oil<br></br><h4><b>600 ml</b><br></br></h4><h4>Rs.209</h4></Typography>
    </div>
    </div>
    </>
  )
}

export default Groceries
