import React, { useState } from 'react'


function USwithobj() {
     const obj = {
        name:"husnain",
        age:21,
        gender:"male",
        isyoung:true
    }; 
    const [person, setPerson] = useState(obj)
   
    const updatavalue = ()=> 
    {
        setPerson(ps => {
                return{
                    ...ps,name:"khalid"
                }
        });
    }
    return (
    <>
        <div className='flex justify-center items-center h-screen w-full'>
            
            <div>
           
                <h1>{person.name}</h1>
                 <h1>{person.age}</h1>
                <h1>{person.gender}</h1>
                <h1>{person.isyoung.toString()}</h1>

              <button className='p-4 bg-red-500 text-white' onClick={updatavalue}>updata</button>
            
            </div>
       
        </div>
  </>

  )
}

export default USwithobj