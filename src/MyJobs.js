import React from 'react'
import P1 from '../src/Images/P1.svg'
import Al1 from './Images/Al1.svg'
import Al2 from './Images/Al2.svg'
import Al3 from './Images/Al3.svg'
import Al5 from './Images/Al5.svg'
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



export default function MyJobs() {
  return (
    <div>
                  <div>
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

  <div className='mt-4'><Link className='text-black' to='/report'>Reports</Link></div>
  <div className='mt-4 text-black-500'><Link className='text-black' to='/messages'>Messages</Link></div>
<div className='-mt-3'><img src={Search}/></div>
<div className='mt-4'><img src={t2}/></div>
<div className='mt-4'><Link to='/fullprofile'><img src={t3}/></Link></div>

  </div>
                  </div>
                  <div className='flex'>
                  <div className='mt-[30px] ml-[50px]'><b>My Jobs</b></div>
                    <div className='ml-[1000px] -mb-[20px] mt-[30px]'>Earnings Available Now : <b>$0.00</b></div>
                  </div>
   
                  <div className='border ml-[50px] mr-[50px] mt-4 p-2'>
    <div className='flex gap- ml-[100px] mt-[50px]'>
      
 <div><b>Active Contracts</b></div>
 <div className='ml-[800px]'>
 <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative ml-4 ">
        <div class=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" className='w-[1000px]' id="default-search" class="block h-[10px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Contracts" required/>
    </div>
</form>
</div>


    </div>

    <div className='flex mt-[50px] ml-[100px ] gap-4'>
      <div className='ml-[100px]'><b>UI/UX Design FOr Education Resources Mobile App</b></div>
      <div><button className='ml-[600px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border rounded-md p-2'>See Timesheet</button></div>
      <div className='ml-[30px]'><img src={Al3}/></div>
    </div>

    <div className='ml-[100px]'>Staffed by : AMIT B at WIz91 Technologies</div>
    <div className='flex'>
      <div className='ml-[100px]'>Hired by : Aloha Apps</div>
      <div className='ml-[400px]'>Active <span className='text-green-500'>5:10 hrs</span> this week </div>
      <div className='ml-[300px]'>Aug 31 - Present</div>
    </div>


    <div className='flex mt-[50px] ml-[100px ] gap-4'>
      <div className='ml-[100px]'><b>UI/UX Design FOr Education Resources Mobile App</b></div>
      <div><button className='ml-[600px] border rounded-xl p-2'>See Timesheet</button></div>
      <div className='ml-[30px]'><img src={Al3}/></div>
    </div>

    <div className='ml-[100px]'>Staffed by : AMIT B at WIz91 Technologies</div>
    <div className='flex'>
      <div className='ml-[100px]'>Hired by : Aloha Apps</div>
      <div className='ml-[400px]'>Active <span className='text-green-500'>5:10 hrs</span> this week </div>
      <div className='ml-[300px]'>Aug 31 - Present</div>
    </div>


    <div className='flex mt-[50px] ml-[100px ] gap-4'>
      <div className='ml-[100px]'><b>UI/UX Design FOr Education Resources Mobile App</b></div>
      <div><button className='ml-[600px] border rounded-xl p-2'>See Timesheet</button></div>
      <div className='ml-[30px]'><img src={Al3}/></div>
    </div>

    <div className='ml-[100px]'>Staffed by : AMIT B at WIz91 Technologies</div>
    <div className='flex'>
      <div className='ml-[100px]'>Hired by : Aloha Apps</div>
      <div className='ml-[400px]'>Active <span className='text-green-500'>5:10 hrs</span> this week </div>
      <div className='ml-[300px]'>Aug 31 - Present</div>
    </div>


    <div className='flex mt-[50px] ml-[100px ] gap-4'>
      <div className='ml-[100px]'><b>UI/UX Design FOr Education Resources Mobile App</b></div>
      <div><button className='ml-[600px] border rounded-xl p-2'>See Timesheet</button></div>
      <div className='ml-[30px]'><img src={Al3}/></div>
    </div>

    <div className='ml-[100px]'>Staffed by : AMIT B at WIz91 Technologies</div>
    <div className='flex'>
      <div className='ml-[100px]'>Hired by : Aloha Apps</div>
      <div className='ml-[400px]'>Active <span className='text-green-500'>5:10 hrs</span> this week </div>
      <div className='ml-[300px]'>Aug 31 - Present</div>
    </div>



<div className='flex mt-[50px]'>
<button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white ml-[150px] rounded p-2 w-[1100px]'>View All Contracts</button>
</div>
  </div>
<br/><br/><br/>




<div className='flex bg-blue-100'>
    <div className=' w-[45vw]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl  '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6   text-white'>Sign In</button></div>
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
