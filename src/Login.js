import React from 'react'
import Login1 from './Images/Login1.svg'
import Login2 from './Images/Login2.svg'
import { Link } from 'react-router-dom'
import R2 from './Images/R2.svg'
import R4 from './Images/R4.svg'


export default function Login() {
  return (
    <div className='flex w-[96vw]] '>
   <div>
   <div className='w-[40vw] h-[96vh] ml-[250px]' style={{ backgroundImage: `url(${Login1})` }}> 
    <div className='bg-white w-[200px] h-[50px] mt-4 p-2'><img src={R2}/></div>
    <div className='bg-white w-[150px]  ml-[400px] mt-[200px]'></div>
    </div>
   </div>


    <div className='w-[40vw] '>
       <div>
       <div className='ml-[200px] mr-[150px] text-medium'><span>Don't have an account?</span> <Link to='/signup'> <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white '>Sign Up</button></Link>&nbsp;&nbsp;</div>
        <div className='mt-[30px] ml-[50px] mr-[200px]' >
            <span className='font-medium'><>Welcome Sign In To<br/>Learn Encourage Share, Continue.</><br/><br/>Email Address : <br/><input type='email' placeholder='example@gmail.com'/><br/><br/>Password : <br/><input type='password' placeholder=''Enter Password/></span><br/><br/>
            <div><span>Remember me</span><span className='ml-[100px] '><Link className='text-yellow-500'>Reset Password</Link></span></div><br/>
            <div><Link to='/login'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 w-[300px] text-white '>Sign In</button></Link></div><br/><br/><b><span className='ml-[150px]'>OR</span></b><br/><br/><div className='ml-[80px] border p-2'><Link><img src={R4}/></Link></div><div className='ml-[10px]'></div><br/><br/>
            <div><span>Don't have an Account? &nbsp;&nbsp;&nbsp;<Link to='/signup'><span className='text-yellow-500'>Create a account</span></Link></span></div>
        </div>
       </div>
    </div>
      
    </div>
  )
}
