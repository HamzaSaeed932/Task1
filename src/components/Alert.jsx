import React from 'react'

const Alert = ({close}) => {
    const handleClick=()=>{
        close(false);
    }
  return (
    <div className='flex justify-between w-[450px] items-center mt-2 border border-gray-500 rounded-xl p-2 bg-gray-800' >
       <h1 className='text-red-700 text-2xl'>Wrong Email or Password</h1>
       <h1 className='text-red-700 font-bold text-2xl cursor-pointer' onClick={handleClick}>X</h1>
    </div>
  )
}

export default Alert
