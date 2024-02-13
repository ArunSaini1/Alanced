import React from 'react'
import P1 from './Images/P1.svg'
import L1 from './Images/L1.svg'
import AA from './Images/AA.svg'
import V2 from './Images/V2.svg'
import B1 from './Images/B1.svg'
import B2 from './Images/B2.svg'
import B3 from './Images/B3.svg'
import B4 from './Images/B4.svg'
import B5 from './Images/B5.svg'
import bg from './Images/Background.svg'
import t1 from './Images/t1.svg'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import Search from './Images/Search.svg'
import t2 from './Images/t2.svg'
import t3 from './Images/t3.svg'


export default function MyProposalsArchived() {
  return (
    <div>
          <div className='w-full'>
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
     <Link to='/proposals' ><button className=' mt-6 ml-8 p-2 rounded-xl border'>Active</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;<button className='p-2 border'> <Link to='/MyProposalsReferrals'>Referrals</Link> </button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='p-2 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-xl'>Archived</button>
<hr/>
      




     <div className='border p-2 ml-[50px] mr-[50px]'>
      <div className='ml-[100px] mt-[150px]'><b>Archived Proposals (826)</b></div><br/>
      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Initiated Sep 1, 2023<br/>in 8 hours</div>
        <div className='ml-[250px]'>Web Designer For Saas Landing Page</div>
        <div className='ml-[250px]'>General Profile</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Initiated Sep 2, 2023<br/>16 hours ago</div>
        <div className='ml-[250px]'>Landing Page Design For A Wine Delevery Website</div>
        <div className='ml-[160px]'>General Profile</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Initiated Sep 1, 2023<br/>16 hours ago</div>
        <div className='ml-[250px]'>Senior React/React Native Developer</div>
        <div className='ml-[260px]'>General Profile</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Initiated Sep 1, 2023<br/>1 Day ago</div>
        <div className='ml-[250px]'>Looking For UI/UX Designer</div>
        <div className='ml-[320px]'>General Profile</div>
      </div>
      <div className='mt-6 ml-[1100px]'><img src={L1}/></div>

      <br/>
<br/>

</div>



<div className='border p-2 ml-[50px] mr-[50px] mt-4'>      <div className='ml-[100px]'><b>Archived Interviews(4)</b></div><br/>
      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Received Aug 30, 2023<br/>3 Days ago</div>
        <div className='ml-[250px]'>No-Code Developer</div>
        <div className='ml-[350px]'>Delined by You</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Received Aug 22, 2023<br/>3 days ago</div>
        <div className='ml-[250px]'>Create Low-Fidelity Wireframes In Figma</div>
        <div className='ml-[210px]'>Declined by You</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Received Aug 2, 2023<br/>3 days  ago</div>
        <div className='ml-[250px]'>Eid Greeting Designs - 50 Units(1080 * 1080 Pixels)</div>
        <div className='ml-[160px]'>Job is Closed</div>
      </div><br/>

      <div className='flex ml-[100px]'>
        <div className='ml-[120px]'>Received July 19, 2023<br/>3 Day ago</div>
        <div className='ml-[250px]'>Instagram Post Editor</div>
        <div className='ml-[340px]'>Declined by You</div>
      </div><br/>

</div>

<br/><br/>


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
