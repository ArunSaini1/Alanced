import React from 'react'
import A29 from '../Images/A29.svg'
import A30 from '../Images/A30.svg'
import A31 from '../Images/A31.svg'
import A32 from '../Images/A32.svg'

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function EditProfile() {
  
  return (
    <div>
      <div className='w-[700px] h-[467px] mt-[100px] ml-[260px] rounded-xl bg-blue-500'><br/>
        <div className='text-xl ml-[50px] mt-4'><b>Edit Photo</b></div>
        <div  className='ml-[50px]'>Show Clients The Best Version Of Yourself!</div>
        <div className='flex justify-center items-center gap-4 mt-8 w-[350px] ml-[150px]'>
            <div><img src={A29}/></div>
            <div><img src={A30}/></div>
            <div><img src={A31}/></div>
            <div><img src={A32}/></div>
        </div><br/>

        <div className='ml-[50px]'><b>Must Be An Actual Photo Of You.</b></div>
        <div className='ml-[50px]'>Logos, clip-art, group photos, and digitally-altered images are not allowed.</div><br/>
        <div className='flex gap-6 ml-[400px]'>
        <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2  '>Change Image</button>
        <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 '>Save Photo</button>
        </div>
      </div>
    </div>
  )
}
