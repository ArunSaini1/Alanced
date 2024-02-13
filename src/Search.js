import React from 'react'
import Coinbase from './Images/Coinbase.svg'
import Spotify from './Images/Spotify.svg'
import Slack from './Images/Slack.svg'
import Adobe from './Images/Adobe.svg'
import Webflow from './Images/Webflow.svg'
import Zoom from './Images/Zoom.svg'
import G1 from './Images/G1.svg'
import G2 from './Images/G2.svg'
import G3 from './Images/G3.svg'
import H1 from './Images/H1.svg'
import H2 from './Images/H2.svg'
import AA from './Images/AA.svg'
import Z1 from './Images/Z1.svg'
import Z2 from './Images/Z2.svg'
import Z3 from './Images/Z3.svg'
import Z4 from './Images/Z4.svg'
import Z5 from './Images/Z5.svg'
import Z6 from './Images/Z6.svg'
import Z7 from './Images/Z7.svg'
import Z8 from './Images/Z8.svg'
import X1 from './Images/X1.svg'
import X2 from './Images/X2.svg'
import X3 from './Images/X3.svg'
import X4 from './Images/X4.svg'
import C1 from './Images/C1.svg'
import C2 from './Images/C2.svg'
import C3 from './Images/C3.svg'
import C4 from './Images/C4.svg'
import C11 from './Images/C11.svg'
import V1 from './Images/V1.svg'
import V2 from './Images/V2.svg'
import B1 from './Images/B1.svg'
import B2 from './Images/B2.svg'
import B3 from './Images/B3.svg'
import B4 from './Images/B4.svg'
import B5 from './Images/B5.svg'


export default function Search() {
  return (
    <div className='relative '>
      <div className='ml-[30px] '>
<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-white-900 sr-only dark:text-white ">Search</label>
    <div className="relative w-[900px] h-[]  ml-[150px] rounded-sm -mt-[20px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white-900 border border-white-300 rounded-lg bg-white-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white " placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>
<div className='mt-[50px]'>
<div className='ml-[500px]'><span>Trusted by 4000+ companies</span></div>
<div className='flex gap-[90px] mt-[30px] ml-[120px]'>
    <img src={Coinbase} /><img src={Spotify} /><img src={Slack} /><img src={Adobe} /><img src={Webflow} /><img src={Zoom} />
</div>
</div>



<div className='w-[90vw]  flex mt-[80px] ml-8'>
<div className='w-[50vw] flex'>
<div><img  src={G1}/></div>
<div><img className='mt-[50px] -ml-[15px]' src={G2}/></div>
<div className='mt-[350px] -ml-[445px] bg-white rounded-xl'><img src={G3}/></div>
</div>


<div className='w-[50vw] '>
    <div className='ml-2'><span>Lorem ispum dolor sit ame</span></div>
    <div className='mt-4 text-4xl ml-2'><b>Simple Solutions for Complex<br/>Connections</b></div>
    <div className='mt-4 ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cupiditate numquam, aut accusamus nesciunt expedita amet fugiat doloremque nemo similique unde! Beatae, cumque molestias. Quo repudiandae cumque ex reiciendis magni!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cupiditate numquam, aut accusamus nesciunt expedita amet fugiat doloremque nemo similique unde! Beatae, cumque molestias. Quo repudiandae cumque ex reiciendis magni!
</div>
<div className='flex mt-6 gap-6 ml-2'><img src={H1}/><b>High Analysis</b><img src={H2}/><b>Certified Institute</b></div>
<div className='mt-2'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white  '>Read More</button></div>
</div>
</div>


<div className='text-3xl ml-[500px] mt-[100px]'><b>Find Top Freelancers</b><img className='mt-4 ml-[60px]' src={AA} /></div>


<div className='w-[99vw] h-[240px] flex gap-7 mt-[40px] rounded-md'>
<div className='w-[20vw]  bg-[#EEF8F9] ml-[50px]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z1} /></div><div className='text-2xl ml-4 mt-10'><b>Writing &<br/>Translation</b><br/><div className='text-sm mt-4'><span>218,356 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FEF8F8]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z2} /></div><div className='text-2xl ml-4 mt-10'><b>Programming &<br/>Software</b><br/><div className='text-sm mt-4'><span>309,834 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#EEECF7]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z3} /></div><div className='text-2xl ml-4 mt-10'><b>Design &<br/>Art</b><br/><div className='text-sm mt-4'><span>210,234 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FDF6E4]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z4} /></div><div className='text-2xl ml-4 mt-10'><b>Administrative &<br/>Secretarial</b><br/><div className='text-sm mt-4'><span>100,130 Freelancers</span></div></div><div></div></div>
</div>

<div className='w-[99vw] h-[240px] flex gap-7 mt-[40px] rounded-md'>
<div className='w-[20vw] bg-[#DBD7FB] ml-[50px]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z5} /></div><div className='text-2xl ml-4 mt-10'><b>Sales &<br/>Marketing</b><br/><div className='text-sm mt-4'><span>76,605 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#D3FFDE]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z6} /></div><div className='text-2xl ml-4 mt-10'><b>Engineering &<br/>Architecture</b><br/><div className='text-sm mt-4'><span>53,308 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FFE2C8]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z7} /></div><div className='text-2xl ml-4 mt-10'><b>Business &<br/>Finance</b><br/><div className='text-sm mt-4'><span>52,417 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#D3EFFD]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z8} /></div><div className='text-2xl ml-4 mt-10'><b>Education &<br/>Traning</b><br/><div className='text-sm mt-4'><span>8,837 Freelancers</span></div></div><div></div></div>
</div>


<div className='mt-2 ml-[530px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[130px] mt-6 text-white '>See All Skills</button></div>

<div className='mt-[80px]'><span className='text-2xl text-[#1B3764] ml-[500px] '>It's Easy to Get Work Done on Alanced</span><img className='mt-4 ml-[650px]' src={AA} /></div>

<div className='flex gap-10 mt-12 ml-[100px]'>
    <img src={X1} />
    <img src={X2} />
    <img src={X3} />
    <img src={X4} />
</div>

<div className='flex ml-[100px] '>
    <div className='font-bold' ><b>Post a Job</b></div>
    <div className='ml-[250px] font-bold'><b>Hire Freelancers</b></div>
    <div className='ml-[230px] font-bold'><b>Get Work Done</b></div>
    <div className='ml-[200px] font-bold'><b>Make Secure Payments</b></div>
</div>

<div className='flex mt-6 ml-[70px]'>
    <div ><span>Create your free job posting and <br/>&nbsp;&nbsp;&nbsp;start receiving Quotes within <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hours.</span></div>
    <div className='ml-[90px]'><span>Compare the Quotes you receive <br/>&nbsp;&nbsp;&nbsp;and hire the best freelance <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;professionals for the job.</span></div>
    <div className='ml-[100px]'><span>&nbsp;&nbsp;&nbsp;Decide on how and when <br/>payments will be made and use<br/>&nbsp;&nbsp;&nbsp;WorkRooms to collaborate<br/>communicate and track work.</span></div>
    <div className='ml-[100px] -mt-[20px]'><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose from multiple payment<br/>&nbsp;&nbsp;&nbsp;mathods with SafePay payment<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;protection</div>
</div>


<div className='mt-2 ml-[490px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[100px] mt-6 text-white '>See How Alanced Work</button></div>


<div className='bg-blue-100 '>
<div className='mt-[80px]'><b className='text-2xl  ml-[450px] mt-[50px]'>Why Over 3 Million People Choose Us</b><img className='mt-4 ml-[600px]' src={AA} /></div>


<div className='flex w-[90vw] gap-4 h-[400px] mt-14'>
    <div className=' w-[28vw]'>
        <div className='w-[100px] h-[100px] absolute ml-[150px]' style={{ backgroundImage: `url(${C1})` }}><img className='ml-[40px] mt-[35px]' src={C11}/></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[50px] '>01</span></div><div className='mt-3 ml-[170px]'><b>Credibility</b></div><div className='mt-3 ml-[50px]'><span className='ml-2'>We verify Freelancers, publish their Feedback <br/><span className='ml-2'>scores and All-Time Transaction Data to help</span><br/><span className='ml-2'>you identify time-tested professionals across</span><br/><span className='ml-[100px]'>the globe.</span></span><img className='mt-4 ml-[100px]' src={C4} /></div>
    </div>
    <div className=' w-[28vw]'> <div className='w-[100px] h-[100px] absolute ml-[150px]' style={{ backgroundImage: `url(${C2})` }}><img className='ml-[40px] mt-[35px]' /></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[50px] '>02</span></div><div className='mt-3 ml-[170px]'><b>Flexiblity</b></div><div className='mt-3 ml-[70px]'><span >We provide multiple Payment terms and<br/><span className='ml-2'>flexible Agreements to enable you to work<br/><span className='ml-[100px]'>the way you want.</span></span></span><img className='mt-[50px] ml-[80px]' src={C4} /></div>
    </div>


    
    <div className=' w-[28vw]'> <div className='w-[100px] h-[100px] absolute ml-[150px]' style={{ backgroundImage: `url(${C3})` }}><img className='ml-[40px] mt-[35px]' /></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[50px] '>03</span></div><div className='mt-3 ml-[190px]'><b>Value</b></div><div className='mt-3 ml-[60px]'><span>We have the lowest fees in the industry,<br/><span className='ml-2'>providing you with maximum value at <br/><span className='ml-[100px]'>minimum cost.</span></span></span><img className='mt-[50px] ml-[80px]' src={C4} /></div>
    </div>
</div>

<div className='mt-2 ml-[490px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[50px] mt-6 text-white  '>Why Choose Alanced</button></div>
</div>
<div >
<div className='mt-[80px]'><b className='text-2xl  ml-[580px] '>Work Your Way</b><img className='mt-4 ml-[600px]' src={AA} /></div>
</div>

<div className='flex'>
    <div className=' w-[35vw] -mt-[80px] '><img src={V1} /></div>
    <div className=' w-[45vw] mt-[80px] '>
    <div className=''><b>Choose from four payments terms and create Agreements.</b></div><br/>
    <div className='ml-[40px]'><b>Fixed Price</b><br/><br/><span>Set a total fixed cost for your job and create milestones to ensure you're<br/>satisfied every step of the way. Set a due date and the amount to be<br/>paid for each milestone.</span></div><br/>
    <div className='ml-[40px]'><b>Hourly<br/><br/>Task-Based<br/><br/>Recurring Payment</b></div>
    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white '>Learn About Agreements</button></div>
 </div>
</div>

<div className='flex bg-blue-100'>
    <div className=' w-[35vw] ml-[50px]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl  '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6 text-white  '>Sign In</button></div>
</div>
    </div>
    <div className=' w-[45vw]'><img src={V2} /></div>
</div>


<div className='flex gap-4 mt-[100px] h-[40vh]'>
    <div className=' w-[20vw] '><span className='ml-[30px]'><b >Product</b><br/><br/><span className='ml-[30px]'>Employee database<br/><span className='ml-[30px]'>Payroll</span><br/><span className='ml-[30px]'>Absences</span><br/><span className='ml-[30px]'>Time tracking</span><br/><span className='ml-[30px]'>Shift planner</span><br/><span className='ml-[30px]'>Recruiting</span></span></span></div>
    <div className=' w-[20vw]'><span className='ml-[30px]'><b >Information</b><br/><br/><span className='ml-[30px]'>FAQ<br/><span className='ml-[30px]'>Blog</span><br/><span className='ml-[30px]'>Support</span></span></span></div>
    <div className='w-[20vw]'><span className='ml-[30px]'><b >Company</b><br/><br/><span className='ml-[30px]'>About Us<br/><span className='ml-[30px]'>Carrers</span><br/><span className='ml-[30px]'>Contact Us</span><br/><span className='ml-[30px]'>Lift Media</span></span></span></div>
    <div className='w-[20vw] bg-blue-100 p-2'>
        <span className='ml-4 mt-4'><b>Subscribe</b><br/><br/>
        <div><input className='h-8 ml-4 border' type='email' placeholder='Email address ml-4'/><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2'><img src={B1}/></button></div><br/><span className='text-sm'>Hello, we are Lift Media. Or goal is to translate the positive effects from revolutionizing how companies engage with their clients & thier team.</span></span>
    </div>
</div><hr/>

<div className='flex gap-[200px]'>
    <div className='ml-2 w-[20vw]'><img src={B2}/></div>
    <div className=' w-[20vw]'><span><b>Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookies</b></span></div>
    <div className=' flex w-[20vw]'><img src={B3}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B4}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B5}/>&nbsp;&nbsp;&nbsp;&nbsp;</div>
</div>

    </div>
  )
}