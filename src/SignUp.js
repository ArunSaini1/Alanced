import React from 'react'
import R1 from './Images/R1.svg'
import R2 from './Images/R2.svg'
import R3 from './Images/R3.svg'
import { Link } from 'react-router-dom'
import R4 from './Images/R4.svg'


export default function SignUp() {
  return (
    <div className='flex w-[98vw] mt-4'>
    <div className='w-[40vw] h-[94vh] ml-[200px]' style={{ backgroundImage: `url(${R1})` }}> 
    <div className='bg-white w-[200px] h-[50px] mt-4 p-2'><Link><img src={R2}/></Link></div>
    <div className='bg-white w-[150px]  ml-[400px] mt-[200px] mr-[50px] rounded-xl'><img src={R3}/></div>
    </div>


    <div className='w-[50vw] mr-[600px] border'>
        <div className='ml-[200px] mr-[50px] text-medium'>Areaedy have an Account? <Link to='/signin'> <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white  '>Sign IN</button></Link>&nbsp;&nbsp;</div>
        <div className='mt-[50px] ml-[50px] mr-[250px]' >
            <span><b>Create Your Free Account</b><br/><br/>Full Name : <br/><input type='text' placeholder='Your Name' className='border p-2'/><br/><br/>Email Address : <br/><input type='email'  placeholder='example@gmail.com' className='border p-2' /><br/><br/>Password : <br/><input type='password' placeholder=''Enter Password className='border p-2' /></span><br/><br/>
            <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 w-[300px] text-white '>Create Your Account</button></div><br/><b><span className='ml-[150px]'>OR</span></b><br/><div className='ml-[80px]'><Link><img src={R4}/></Link></div><br/><br/>
            <div><span>Already have an Account? &nbsp;&nbsp;&nbsp;<Link to='/signin'><span className='text-yellow-500'>Sign in</span></Link></span></div>
        </div>
    </div>
      
    </div>
  )
}
