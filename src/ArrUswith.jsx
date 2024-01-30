import React from 'react'
import { useState } from 'react';

function ArrUswith() {
  let arr = [1,2,3,4,5];

  const [array, setArray] = useState(arr);

let changearray = ()=>{
    setArray(ps =>{
        return[
            ...ps , Math.floor(Math.random()*50)
        ]
    });
}
  return (
<>
<div className='flex justify-center'>
<ul >
    {
        array.map((item , i) =>{

            return(
                <li className='mb-2' key={i}>{item}</li>
            )
        })
    }
<button onClick={changearray} className='bg-red-500 text-white p-2'>click me</button>
</ul>
</div>

</>    
  )
}

export default ArrUswith