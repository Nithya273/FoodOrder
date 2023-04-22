import React from 'react'

const  Filter= () => {
    const prod=["All items","Rice Items","Cold Drinks","Pizza","Hot Drinks"]
    const [filter,setFilter]=React.useState("All items")
  return (
    <div>
        <center className='mt-3'>
           <span className='h4'></span> 
           <select name='filter' className='p-1' onChange={(e)=>setFilter(e.target.value)}>{prod.map((item,index)=>(<option value={item} key={index}>{item}</option>))}</select>
           <button className='btn btn-primary m-2' onClick={()=>console.log(filter)}>Submit</button>
        </center>
    </div>
  )
}

export default Filter