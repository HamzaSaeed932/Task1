import React from 'react'

const Settings = () => {
  return (
    <div className='mx-4 '>
      <input type="text"  placeholder='First Name' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='Last Name' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='Email' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>

      <button className='border px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-lg mt-4'>SAVE</button>
    </div>
  )
}

export default Settings
