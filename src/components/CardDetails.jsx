import React from 'react'

const CardDetails = () => {
  return (
    <div>
       <div className='mx-4 '>
      <input type="text"  placeholder='Card Number' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='Expiration Date' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='CVV' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>

      <button className='border px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-lg mt-4'>SAVE</button>
    </div>
    </div>
  )
}

export default CardDetails
