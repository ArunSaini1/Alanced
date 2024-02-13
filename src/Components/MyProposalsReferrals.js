import React from 'react'
import P1 from '../Images/P1.svg'
import L2 from '../Images/L2.svg'
import AA from '../Images/AA.svg'
import V2 from '../Images/V2.svg'
import B1 from '../Images/B1.svg'
import B2 from '../Images/B2.svg'
import B3 from '../Images/B3.svg'
import B4 from '../Images/B4.svg'
import B5 from '../Images/B5.svg'
import L5 from '../Images/L5.svg'
import bg from '../Images/Background.svg'
import t1 from '../Images/t1.svg'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import Search from '../Images/Search.svg'
import t2 from '../Images/t2.svg'
import t3 from '../Images/t3.svg'

export default function MyProposalsReferrals() {
  return (
    <div>
     <div className='w-[100vw]'>
     <div className='w-full'>
      <div className='flex h-[80px] gap-2 sticky top-0'  style={{ backgroundImage: `url(${bg})` }}>
         <div className='ml-[80px] mt-4'><img src={t1}/></div> 
         <div className='mt-4 ml-4 text-xl'><b>Alanced</b></div>   

         <div className="mt-4 ml-[200px]">
    <Select label="Find Work">
      <Option><Link to='/savejobs'>Saved Jobs</Link></Option>
     <Option><Link to='/proposals'>Proposals</Link></Option>
     <Option><Link to='/projectlist'  >Project List</Link></Option>
    </Select>
  </div>

  <div className="mt-4">
    <Select label="My Jobs">
      <Option><Link to='/myjobs'>My Jobs</Link></Option>
      <Option><Link to='/allcontracts'>All Contracts</Link></Option>
      <Option><Link to='/connecthistory'>Connect History</Link></Option>
    </Select>
  </div>

  <div className='mt-4'><Link className='text-black'>Reports</Link></div>
  <div className='mt-4 text-black-500'><Link className='text-black' to='/messages'>Messages</Link></div>
<div className='-mt-3'><img src={Search}/></div>
<div className='mt-4'><img src={t2}/></div>
<div className='mt-4'><Link to='/fullprofile'><img src={t3}/></Link></div>

  </div>
      </div>
     </div>
      <button className=' mt-6 ml-8 p-2 rounded-xl border'><Link to='/proposals'>Active</Link> </button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='p-2 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white rounded-xl'>Referrals</button>&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/MyProposalsArchived' ><button className='p-2 border rounded-xl'>Archived</button></Link>
<hr/><br/><br/><br/><br/><br/><br/>
<div className='border rounded-xl ml-[150px] p-2 mr-[150px]'>
      <div className='ml-[400px]'>
        <div><img src={L2}/></div><br/>
        <div className='ml-[60px]'><b>You Haven't Referred Anyone Yet</b></div>
        <div>When declining an invitation you can make a referral to <br/>help other freelancers Success and help clients fill their job<br/><b/><b>Learn More About Referring Freelancers</b></div>
      </div>
        </div>
      <br/><br/><br/>

      <div className='flex bg-blue-100'>
    <div className=' w-[45vw]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl  '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6 text-white '>Sign In</button></div>
</div>
    </div>
    <div className=' w-[55vw]'><img src={V2} /></div>
</div>


<div className='flex gap-4 mt-[100px] h-[40vh]'>
    <div className=' w-[25vw] '><span className='ml-[30px]'><b >Product</b><br/><br/><span className='ml-[30px]'>Employee database<br/><span className='ml-[30px]'>Payroll</span><br/><span className='ml-[30px]'>Absences</span><br/><span className='ml-[30px]'>Time tracking</span><br/><span className='ml-[30px]'>Shift planner</span><br/><span className='ml-[30px]'>Recruiting</span></span></span></div>
    <div className=' w-[25vw]'><span className='ml-[30px]'><b >Information</b><br/><br/><span className='ml-[30px]'>FAQ<br/><span className='ml-[30px]'>Blog</span><br/><span className='ml-[30px]'>Support</span></span></span></div>
    <div className='w-[25vw]'><span className='ml-[30px]'><b >Company</b><br/><br/><span className='ml-[30px]'>About Us<br/><span className='ml-[30px]'>Carrers</span><br/><span className='ml-[30px]'>Contact Us</span><br/><span className='ml-[30px]'>Lift Media</span></span></span></div>
    <div className='w-[25vw] bg-blue-100 p-2'>
        <span><b>Subscribe</b><br/><br/>
        <div><input className='h-8 ml-4' type='email' placeholder='Email address'/><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2'><img src={B1}/></button></div><br/><span className='text-sm'>Hello, we are Lift Media. Or goal is to translate the positive effects from revolutionizing how companies engage with their clients & thier team.</span></span>
    </div>
</div><hr/>

<div className='flex gap-[200px]'>
    <div className='ml-2 w-[30vw]'><img src={B2}/></div>
    <div className=' w-[30vw]'><span><b>Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookies</b></span></div>
    <div className=' flex w-[30vw]'><img src={B3}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B4}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B5}/>&nbsp;&nbsp;&nbsp;&nbsp;</div>
</div>
    </div>
  )
}
