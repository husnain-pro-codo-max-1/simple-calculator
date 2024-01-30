import React from 'react'

function Responsive() {
  return (
        <>
        <div className='bg-purple-200 '>
            <div className='max-w-[1240px] mx-auto flex border-2 border-green-400 justify-between'>

            <div className='text-xl sm:text-sm md:text-4xl lg:text-7xl  border-2 border-red-600 '>RESPONSIVE DESIGN </div>
            
            <div>
            <ul className='flex gap-4 text-xl  border-2 border-blue-600'>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONATCT</li>
            <li>HELP</li>
            </ul>
            </div>
</div>
            </div>
        </>
    )
}

export default Responsive