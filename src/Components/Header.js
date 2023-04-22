import React from 'react'
import {useSelector } from 'react-redux'
//import { cartActions } from '../store/CartSlice'
const Header = () => {
  const quantity=useSelector(state=>state.cart.totalQuantity)

  //const dispatch=useDispatch()
  /*const cartItems=useSelector((state)=>state.cart.itemsList)
  console.log(cartItems)
  const addToCart=(item)=>{
      if (item && item.id) {
        dispatch(cartActions.addToCart({
          name,
          id,
          price,
    
        }))
        // Add the item to the cart
      }

   
  }*/
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
    <a className='navbar-brand' href='R'>Restaurant</a>
    <button className='btn btn-primary'>Cart:{quantity}<span className='badge bg-secondary'></span></button>
   </nav>
    </div>
   
  )
}

export default Header