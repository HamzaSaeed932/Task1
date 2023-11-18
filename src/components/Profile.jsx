import React,{useState} from 'react'
import Settings from './Settings'
import CardDetails from './CardDetails'
function Profile() {
  const [profile,setProfile]=useState('PROFILE SETTINGS')
  return (
    <>
    <div className='p-2'>
      <h1 className='text-4xl mb-4'>Profile Setting</h1>
      <div>
        <button className={`${profile ==='PROFILE SETTINGS'?'border-b-2 border-b-blue-500 text-blue-500 font-semibold ':''} mr-5 p-3 w-[170px]`} onClick={(e)=>{setProfile(e.target.innerHTML)} }>PROFILE SETTINGS</button>

        <button  className={`${profile ==='CREDIT CARD DETAILS'?'border-b-2 border-b-blue-500 text-blue-500 font-semibold':''} p-3 w-[190px]`} onClick={(e)=>{setProfile(e.target.innerHTML)}}>CREDIT CARD DETAILS</button>
      </div>
      </div>

      <div>
        {profile === 'PROFILE SETTINGS' && <Settings />}
        {profile === 'CREDIT CARD DETAILS' && <CardDetails />}
      </div>

    </>
  )
}

export default Profile
