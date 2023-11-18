import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function OtpScreen() {
    let Navigate =useNavigate();
    const [otp,setOtp]=useState('')
    const handleEnter=(e)=>{
       
         if(e.key === 'Enter'){
            if(otp === '1234'){
                Navigate('/Sidebar')
            }
            else{
                alert('OTP Not Matched')
            }
        }
    }
  return (
    <div className='flex justify-center items-center h-screen bg-black w-full'>
      <input type="text" onKeyPress={handleEnter} className='rounded-xl w-[202px] h-[50px] p-2 text-2xl font-mono' placeholder='Four digit OTP' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
    </div>
  )
}

export default OtpScreen
