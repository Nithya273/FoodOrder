import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/CartSlice'
import Foods from './Foods'
const Card = ({name,img,id,price}) => {
  const cartItems=useSelector((state)=>state.cart.itemsList)
  console.log(cartItems)
  const dispatch=useDispatch()
  const addToCart=(item)=>{
dispatch(cartActions.addToCart({
  name,
  img,
  id,
  price,
}))
  }
  return (
    <div className='container'>
    <div className='row'>
      {Foods.map((item)=>(
        
        <div className='col-md-4' style={{padding:"5px"}} key={item.id}> 
        <div className='card' key={item.id} style={{width:"18rem",padding:"3px"}}>
       <img src={item.img} alt='img' className='card-img-top' />
       
      <h5 className='card-title' >{item.name}</h5>
      <div className='card-text' >Rs.{item.price}</div>
    <button className='btn btn-primary' onClick={addToCart(item)}>Order</button>
      
       </div>
       </div>
       
       ))
       }
      
       </div>
  
      </div>


  )
}

export default Card