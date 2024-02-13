import React from 'react'
import P1 from '../src/Images/P1.svg'
import M1 from './Images/M1.svg'
import M2 from './Images/M2.svg'
import M3 from './Images/M3.svg'
import M4 from './Images/M4.svg'
import M5 from './Images/M5.svg'
import M6 from './Images/M6.svg'
import M15 from './Images/M15.svg'
import M16 from './Images/M16.svg'
import M17 from './Images/M17.svg'
import M20 from './Images/M20.svg'
import M21 from './Images/M21.svg'
import M23 from './Images/M23.svg'
import bg from './Images/Background.svg'
import t1 from './Images/t1.svg'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import Search from './Images/Search.svg'
import t2 from './Images/t2.svg'
import t3 from './Images/t3.svg'



export default function Message() {
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

            <div className='flex  w-[98vw] gap-4'>
                <div className=' w-[30vw] ml-2 mt-4'>
                    <div className='flex'>
                        <div><b>Chats</b></div><br/>
                        <div className='ml-[380px] mt-2'><img src={M1}/></div>
                    </div>

                    <div>
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative ml-4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block h-[10px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
    </div>
</form>
</div>
<div className='overflow-auto'>
<div className='mt-4 flex gap-4'>
    <div><img src={M2}/></div>
    <div><b>Anthony Daugloi</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>



<div className='mt-4 flex gap-4'>
    <div><img src={M3}/></div>
    <div><b>Bye Wind</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>


<div className='mt-4 flex gap-4'>
    <div><img src={M4}/></div>
    <div><b>Byw Wind</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>



<div className='mt-4 flex gap-4'>
    <div><img src={M5}/></div>
    <div><b>Jannes Graf</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>


<div className='mt-4 flex gap-4'>
    <div><img src={M6}/></div>
    <div><b>David Lynch</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>



<div className='mt-4 flex gap-4'>
    <div><img src={M2}/></div>
    <div><b>Pulkit Kumar</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>



<div className='mt-4 flex gap-4'>
    <div><img src={M4}/></div>
    <div><b>Anthony Daugloi</b><br/>UI Designer - Complex<br/>You : Do you have any reference card?</div>
</div><br/>


</div>
           </div>
                <div className=' w-[45vw]'>
                    <div className='flex'>
                    <div className='mt-4'><img src={M15}/></div>
                        <div className='mt-4 ml-2'><b>David Lynch</b>
                   </div>
                        <div className='ml-[600px]'><img src={M16}/></div>
                        <div><img src={M17}/></div>
                    </div>
                    <div>3:06 PM EDTAlgorithm and Software Developer</div>
                    <div className='flex gap-4 ml-[80px] mt-[80px]'>
                        <div><img src={M2}/></div>
                        <div>Hi James! Please remember to buy the food for tomorrow! i'm gonna be handling the gifts and Jake's gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standerd dummy text ever since the 1500s, when an unknown</div>
                    </div><br/>
                    <div className='ml-[100px]'><input type='text' placeholder='Yesterday at 8:pm'/></div>
                    <div className='ml-[200px] mt-[50px]'>Hi James! Please remember to buy the food for tomorrow! i'm gonna be handling the gifts and Jake's gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standerd dummy text ever since the 1500s, when an unknown</div><br/><br/>


                    <div className='flex'>
                    </div>
                    <div className='flex gap-4 ml-[80px] mt-[80px]'>
                        <div><img src={M2}/></div>
                        <div>Hi James! Please remember to buy the food for tomorrow! i'm gonna be handling the gifts and Jake's gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standerd dummy text ever since the 1500s, when an unknown</div>
                    </div><br/>
                    <div className='ml-[100px]'><input type='text' placeholder='Yesterday at 8:pm'/></div>
                    <div className='ml-[200px] mt-[50px]'>Hi James! Please remember to buy the food for tomorrow! i'm gonna be handling the gifts and Jake's gonna get the drinks is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standerd dummy text ever since the 1500s, when an unknown</div><br/><br/>


<div className='ml-[500px]'>
    <img src={M20}/>
</div>
<div><img src={M21}/></div>
                    
                </div>
                <div className=' w-[18vw]'>
                    <div className='ml-[80px] mt-[100px]'><img src={M23}/></div>
                    <div className='ml-[80px]'><b>David Lynch</b></div>
                    <div className='ml-[80px]'>5:18 AM GMT+10(4.5 h ahead)<br/>UI Designer - Complex Topics Simple Designs</div><br/><br/>
                    <div className='ml-[80px]'><b>Recent Files</b><br/><br/>Search Messages<br/>People<br/>Files & Links<br/>Personal Notepad</div>
                </div>

            </div>

      
    </div>
  )
}
