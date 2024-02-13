import React from 'react'
import F1 from '../Images/AK1.svg'
import B2 from '../Images/B2.svg'
import N1 from '../Images/N1.svg'
import N2 from '../Images/N2.svg'
import { Link } from 'react-router-dom'

export default function JoinAsAFreelancer() {
  return (
    <div>
    <div className='h-[90vh] w-[80vw]  mt-6 ml-[200px] mr-[200px]' style={{ backgroundImage: `url(${F1})` }}>

    <div className='mt-[50px]  w-[200px] h-[60px] mt-4 '>
    <img className='mt-4' src={B2}/></div>


<div className='bg-white border-green-800	 ml-[200px] mt-[40px] h-[60vh] mr-[150px] w-[50vw] mb-[40px]'>
    <div className='text-center  text-2xl '><span className='mt-[150px]'><div className='mt-4'>Join As A Client Or Freelancer</div></span></div>
    <div className='flex w-[50vw] mt-8 gap-8 ml-[80px]'>
        <div className=' w-[15vw] h-[150px] '>
<Link><div className='border p-2 ml-[20px] mt-[20px]'><img src={N1}/><br/><span className='text-black hover:text-black'>I'm A Client Hiring <br/>For A Project</span></div></Link>        </div>
        <div className='w-[15vw]'>
<Link> <div className='border p-2 ml-[20px] mt-[20px]'><img src={N2}/><br/><span className='text-black hover:text-black'>I'm A Freelancer, Looking <br/>For Work</span></div></Link>
        </div>
    </div>
    <div className='mt-[40px] ml-[200px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 w-[300px] text-white '><Link to='/signup' className='hover:text-white text-white font-medium'>Join as a Client</Link></button></div><br/>
    <span className='ml-[270px]'>Already have an account? <Link className='text-yellow-500' to='/login'>Log In</Link></span>

</div>
    </div>





    </div>
  )
}
