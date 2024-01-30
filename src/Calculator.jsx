import React from 'react'
import { useState } from 'react';

function Calculator() {

  const[result , setval] = useState(" ");

  const handledata = (e)=>{

   setval(result.concat(e.target.value));



  }
  
  function equalval(){

    setval(eval(result).toString());


  }
  
  function cleardata(){
    setval(" ")
  }

  return (
    <>
    <div className='bg-black/80 w-full h-screen flex justify-center items-center '>


<div className='bg-[#addbb6] w-[440px] h-[480px] rounded-lg '>

{/* main content button input down  */}
<div className='mt-10 ml-10'>

<div> <input type="text" placeholder='0' value={result}  className=' outline-none w-[335px] h-14 mb-4 rounded-lg  text-right pr-4 text-2xl focus:border-2 border-red-400'/></div>
<div className=' w-[350px] flex-col'>

<div className=' mb-1 flex gap-4'> <input type="button" value ="7"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400 '/> <input type="button"  value="8"   onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400 '/> <input type="button" value="9"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400 '/> <input type="button" value="/"   onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg   hover:bg-emerald-900' /></div>
<div className='mb-1 flex gap-4'> <input type="button" value ="4"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400'/> <input type="button"  value="5"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400' /> <input type="button" value="6"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400' /> <input type="button" value="*"     onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg  hover:bg-emerald-900' /></div>
<div className=' mb-1 flex gap-4'> <input type="button" value ="1"  onClick={handledata}  className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400'/> <input type="button"  value="2"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400' /> <input type="button" value="3"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400' /> <input type="button" value="-"   onClick={handledata}  className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-red-600 ' /></div>
<div className=' mb-1 flex gap-4'> <input type="button" value ="0"  onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400'/> <input type="button"  value="."   onClick={handledata} className='w-14 h-14 m-2 bg-white text-2xl rounded-lg hover:bg-orange-400' /> <input type="button" value="+"   onClick={handledata} className='w-14 h-14 m-2  bg-white text-2xl rounded-lg hover:bg-green-600' /><input type="button" value="=" onClick={equalval} className='w-14 h-14 m-2 bg-yellow-500 text-2xl rounded-lg' /></div>
<div><button onClick={cleardata} className=' bg-gray-800 w-80 h-12 text-center text-2xl  font-bold text-white mt-2 rounded-lg ml-2 '>Clear</button> </div>

</div>

</div>
</div>
</div>
    </>
  )
}

export default Calculator