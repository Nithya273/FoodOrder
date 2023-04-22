import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home'
import Order from './Components/Order'
import {useSelector} from 'react-redux'

function App() {
  const cartItems=useSelector((state)=>state.cart.itemsList)
  console.log(cartItems)
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Order" element={<Order/>}/>
        
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
