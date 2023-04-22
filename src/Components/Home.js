import React from 'react'
import Header from './Header'
import Table from './Table'
import Filter from './Filter'
import Card from './Card'
import Foods from './Foods'
//import CartItems from './CartItems'
const Home = () => {
  //console.log(Foods)
  const fooditems=Foods.map(item=>{
    return(
  <li key={item.id}>
    <Card
    name={item.name} className='name' key={item.id}
     price={item.price} 
     img={item.img} 
     />
  </li>
 )
  })
  return (
    <div>
      <Header/>
      <Table/>
      <Filter/>
      {fooditems}
    </div>
  
  )
}

export default Home
/*const Home=({id,name,price,img})=>{
  return(
    <div>
      <Header/>
      <Table/>
      <Filter/>
      <Food/>
      <img src={img} alt={name}></img>
      <h2>{name}</h2>
      <p>Rs{price}</p>
    </div>
  )
}
export default <Home></Home>*/