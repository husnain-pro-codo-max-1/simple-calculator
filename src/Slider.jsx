import React from 'react'
import Marquee from 'react-fast-marquee';


function Slider() {
  return (
    <> <div>
        <div className='pt-40 bg-black h-screen w-full'>
            <Marquee  speed={100} delay={5} >
                <div> <img src="images/img1.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img2.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img3.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img4.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img5.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img6.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img7.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img8.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img9.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img10.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
            </Marquee>

            <Marquee  speed={100} delay={5}  direction="right" className ='mt-8'>
                <div> <img src="images/img1.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img12.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img3.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img6.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img8.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img10.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img9.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img12.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img2.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
                <div> <img src="images/img11.jpg"  className='w-40 h-40 mx-1 rounded-md' alt="" /></div>
            </Marquee>

        </div>

        </div>
    </>

  )
}

export default Slider