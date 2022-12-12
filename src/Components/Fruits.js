import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Fruits.css'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

export default function Contact() {
  const navigate=useNavigate();
  let navfruit1=()=>{
    navigate('/fruit1')
  }
  let navfruit2=()=>{
    navigate('/fruit2')
  }
  return (
    <div class="body1">
    <Link to='/'><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" id="back"/></Link>
    <Box sx={{
      width: 200,
      height: 170,
      paddingLeft:'3%',
      paddingTop:'1%'
      
    }}>
    <img src='https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg'alt="Loading..." style={{width:'90%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Apple<br/>
    Price:210(PerKg)
    </Typography></Box>
    <Box onClick={navfruit2} id="orange"
      sx={{
        width: 200,
        height: 190,
        paddingLeft:'3%',
        paddingTop:'3%',
        
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJ5bIp5L8-U3J_9TtS9iHhbvkDuY7gSyzZg&usqp=CAU' alt="Loading..." style={{width:'90%',paddingTop:'5%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%'>
    Orange<br/>
    Price:200(PerKg)
    </Typography>
    </Box>
    <Box
      sx={{
        width: 200,
        height: 190,
        paddingLeft:'3%',
        paddingTop:'5%',
      
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuLxDGERdJohZnNxxIoPJUgxPbYkIpjqq5A&usqp=CAU' alt="Loading..." style={{width:'90%',height:'60%',paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%'>
    Cucumber<br/>
    Price:100(A dozen)
    </Typography>
    </Box>
    <Box className='img1'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
        paddingTop:'0%',
       
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8e58O4acIB6mmlLLog96aAhqHZ2wf2t_Sw&usqp=CAU' alt='Loading...' style={{width:'90%',paddingTop:'12%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Bananaa<br/>
    Price:90(A Dozen)
    </Typography>
    </Box>
    <Box className='img2'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
       
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-bcpHslifc5dni32G6FL4b1cibaYqpwMgg&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Kiwi<br/>
    Price:190(Per Kg)
    </Typography>
    </Box>
    <Box onClick={navfruit1} className='img3'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
     }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzj0day1Ff6V2R82IjMQ-tl5tErG6ep6ffcic5EYoGfZnOUkIKFzMt71fuw86TLkYwgw&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Water Melon<br/>
    Price:80(Per Kg)
    </Typography>
    </Box>
    <Box className='img6'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
      
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-5cYmBwbBqVpun_5sVnrb2D7NTn6sVkpLOOu7JJFV-Y_Jb9ElkgpXB1SgMQCyN0FWPo&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Papaya<br/>
    Price:80(Per Kg)
    </Typography>
    </Box>
    <Box className='img5'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm51WGG5kqc_kkgdPSWZQPtJAZUIzl9OgwXw&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography varient='h6' paddingLeft='5%' align='center'>
   <h7> Grapes-Green Sonaka</h7><br/>
    Price:190(Per Kg)
    </Typography>
    </Box>
    <Box className='img4'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVa6zWKwr2Q4SFYCkkK-IdE45Cv5cx2Tx99g&usqp=CAU' alt='Loading...' style={{width:'90%',height:'52%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Drogon Fruit<br/>
    Price:250(Per Kg)
    </Typography>
    </Box>
    <Box className='img7'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
       
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6eTrR06v_22cTuHpfNe0eG_t5fH05QyYohg&usqp=CAU' alt='Loading...' style={{width:'90%',height:'52%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    StrawBerry<br/>
    Price:250(Per Kg)
    </Typography>
    </Box>
    <Box className='img8'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XFgp_RztZI8C4ttA8kQTlFdXS0SOXgsjdw&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'10%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Pomogranate<br/>
    Price:250(Per Kg)
    </Typography>
    </Box>
    <Box className='img9'
    sx={{
        width: 200,
        height: 200,
        paddingLeft:'3%',
      }}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj1P0UGXuQeoodEczxtWo_pcya51_Eli4-g&usqp=CAU' alt='Loading...' style={{width:'90%',height:'60%', paddingTop:'15%',paddingLeft:'5%'}}/>
    <Typography variant='h6' paddingLeft='5%' align='center'>
    Custard Apple<br/>
    Price:250(Per Kg)
    </Typography>
    </Box>
    <br/><br></br>
    <br/><br></br>
    </div>
    )
}
