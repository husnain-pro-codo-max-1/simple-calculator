import React from 'react'
import { useReducer } from 'react';

function UReducer() {
  const initialstate = 0 ;
  const reducer = (state , action)=>{
switch (action) 
{
    case 'increment' :
        return  state + 1;
    case 'decrement' :
    
       if(state===0){return 0;}
       else {
        return state -1;
       }  
             

    case 'reset' :
       return  initialstate;

    // default:
    //     return state ;
}


  }

    const [count, dispatch] = useReducer(reducer,initialstate);
    return (
  <>
        <h1 className='pl-[600px] mb-10 mt-5 text-2xl'> count value  = {count}</h1>
  <div className='flex justify-center gap-2 '>
        <button onClick={()=> dispatch('increment')} className='px-3 py-3 bg-green-400 '>INCREMENT</button>
        <button onClick={()=> dispatch('decrement')} className='px-3 py-3 bg-red-400 ' >DECREMENT</button>
        <button onClick={()=> dispatch('reset')} className='px-3 py-3 bg-purple-400 '>RESET</button>
</div>
  </>
    )

}

export default UReducer