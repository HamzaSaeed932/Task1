import React from 'react'

function Password() {
  return (
    <div>
      <div>
        <h1 className='text-4xl p-2 m-2'> Change Password</h1>
       <div className='mx-4 '>
      <input type="text"  placeholder='Current Password' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='New Password' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>
      <input type="text" placeholder='Confirm New Password' className='border-2 border-gray-300 my-5 p-3 w-full  rounded-md'/>

      <button className='border px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-lg mt-4'>SAVE</button>
    </div>
    </div>
    </div>
  )
}

export default Password
