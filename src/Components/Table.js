import React from 'react'

const Table = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
   const inActiveButton='btn btn-outline-primary m-2';
   const ActiveButton='btn btn-outline-primary m-2 active';
   const [number,setNumber]=React.useState(null)
  return (
    <div>
        <center className='mt-2'>
            <h4>Select your Table number</h4>
            {numbers.map((num,index)=>(
              <div style={{display:'inline'}} key={index}>
                <button className={number===num?ActiveButton:inActiveButton} onClick={()=>setNumber(num)}>
{num}
                </button>
              </div>  
            ))}
        </center>
    </div>
  )
}

export default Table