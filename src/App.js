import './App.css';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact';
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ButtonAppBar from './Components/NavBar';
import Bottom from './Components/Bottom';
import SignUp from './Components/SignUp';
import OtpVerify from './Components/OtpVerify'
import Paymentcard from './Components/Paymentcard'
import PaymentUpi from './Components/PaymentUpi'
import PaymentCash from './Components/PaymentCash'
import Forget from './Components/Forget'
import Cart from './Components/Cart'
import Fruits from './Components/Fruits'
import Fruit1 from './Components/Fruit1'
import Fruit2 from './Components/Fruit2'
import Address from './Components/Address'
import Success from './Components/Success'

function App() {
  return (
    <div className="App">
   
      <BrowserRouter >
      <ButtonAppBar />
      
      <Routes>
      <Route path="/" element ={<Home />}></Route>
      <Route path="/login" element ={<Login />}></Route>
      <Route path="/aboutus" element ={<AboutUs />}></Route>
      <Route path="/contact" element ={<Contact />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/otp" element={<OtpVerify />}></Route>
      <Route path="/payment" element={<Paymentcard />}></Route>
      <Route path="/paymentupi" element={<PaymentUpi />}></Route>
      <Route path="/paymentcash" element={<PaymentCash />}></Route>
      <Route path="/forget" element={<Forget />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/fruits" element={<Fruits />}></Route>
      <Route path="/fruit1" element={<Fruit1 />}></Route>
      <Route path="/fruit2" element={<Fruit2 />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/success" element={<Success />}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
