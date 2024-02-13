import React from 'react'
import F1 from './Images/F1.svg';
import B2 from './Image2/Frame.svg'
import { Link } from 'react-router-dom';
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
import B3 from './Images/B3.svg'
import B4 from './Images/B4.svg'
import B5 from './Images/B5.svg'
import Bg1 from './Images/Background.svg'
import pattern from './Image2/pattern.svg'
import { Option, Select } from '@material-tailwind/react';

export default function Home() {
  return (
    <><div className=''>
    <div className='sticky top-0 h-[100px] fixed z-10' style={{backgroundImage:`url(${Bg1})`}}>
    <div><img src={pattern}/></div>
    <div className='ml-[150px] -mt-[60px] flex'><Link><img src={B2}/></Link><Link><span className='ml-2 text-2xl mt-3 text-black '><b>A L A N C E D</b></span></Link></div>

    <div className='ml-[600px] -mt-[70px] p-2 text-black'>
            <Link className='text-black inter text-xl hover:text-black antialiased '>Find Talent</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='text-black cardo text-xl hover:text-black antialiased  mb-2' to='/projectlist' ><>Find Work</></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='text-black cardo text-xl hover:text-black antialiased'><>Why Upwork</></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='text-black cardo text-xl hover:text-black antialiased'><>Enterprise</></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/arun'><b>(Arun)</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to='/login'> <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md  ml-2 mt-6 text-white w-[90px] p-2'>Sign IN</button></Link>&nbsp;&nbsp;
           <Link to='/findtalent'><button className=' rounded-md p-2 ml-2 mt-6 border-t-green-700 border-r-green-700 border-l-green-700  border-b-yellow-700 border-[2px] text-green-500 bold w-[90px] '>Sign Up</button></Link>
          </div>
    </div>
         <div className='h-[100vh] bg-cover w-full' style={{ backgroundImage: `url(${F1})` }}> 
         <div className='flex'>
         
         </div>
         <div className='ml-[160px] mt-[120px] absolute w-[707px] h-[316px] '>
            <div className='w-[391px] h-[22px] ml-[5px] text-[20px] antialiased' ><span className='text-black font-semibold	'>Populer:</span> <span className='text-inherit	font-semibold text-gray-600	'>Design Art Business Video Editing</span></div>
            <div className='w-[707px] h-[204px] mt-[15px] ml-[5px] text-6xl text-indigo-800 antialiased text-[#031136] font-medium 	'><span>Find & Hire<br/>Top 3% Of expert <br/>on Alanced</span></div>
            <div className='w-[479px] h-[52px] mt-[15px] ml-[5px]'><span className='subpixel-antialiased	text-gray-600 text-[16px]'>With the largest professional creative commmunity online, simply<br/> search through from our website</span></div>
            <div className='mt-2'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 text-white p-2 font-bold'>Get Started</button></div>
         </div>
        
          </div>
          




          <div className='ml-[100px]  w-[900px]'>
<form>   
    <div className='w-[1100px] bg-white p-2 rounded-xl -mt-[50px] ml-[100px]'>
    <div className="relative flex w-[900px] h-[]  ml-[150px] rounded-sm -mt-[20px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
            </svg>
        </div>
        <div className='flex'>
        <div className='w-[500px] ml-4 mt-4'>        
    <input type="search" id="default-search" className=" border-r-black block w-full p-4 pl-10 text-sm text-white-900 border border-white-300 rounded-lg bg-white-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white " placeholder="Search." required/>
</div>
    <div className='mt-[40px]'>
    <Select label='Project'>
        <Option>Talent</Option>
        <Option>Project</Option>
        <Option>Jobs</Option>
    </Select>
</div>
    
<div className='ml-[100px]'>
<button type="submit" className=" mr-[50px] text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>

</div>

    </div>
    </div>
</form>
</div>
<div className='mt-[50px]'>
<div className='ml-[500px] font-medium text-xl'><span>Trusted by 4000+ companies</span></div>
<div className='flex gap-[90px] mt-[30px] ml-[120px]'>
    <Link><img src={Coinbase} /></Link><Link><img src={Spotify} /></Link><Link><img src={Slack} /></Link><Link><img src={Adobe} /></Link><Link><img src={Webflow} /></Link><Link><img src={Zoom} /></Link>
</div><div className='ml-[200px] mr-[200px]'><hr/></div>
</div>



<div className='w-[96vw]  flex mt-[80px] ml-8'>
<div className='w-[45vw] flex ml-[100px]'>
<div><img  src={G1}/></div>
<div><img className='mt-[50px] -ml-[15px]' src={G2}/></div>
<div className='mt-[350px] -ml-[445px] bg-white rounded-xl'><img src={G3}/></div>
</div>


<div className='w-[45vw] mr-[50px] '>
    <div className='mt-4 text-4xl ml-2'>Simple Solutions for Complex<br/>Connections</div>
    <div className='mt-4 ml-2 font-normal	'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cupiditate numquam, aut accusamus nesciunt expedita amet fugiat doloremque nemo similique unde! Beatae, cumque molestias. Quo repudiandae cumque ex reiciendis magni!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cupiditate numquam, aut accusamus nesciunt expedita amet fugiat doloremque nemo similique unde! Beatae, cumque molestias. Quo repudiandae cumque ex reiciendis magni!
</div>
<div className='flex mt-6 gap-6 ml-2'><img src={H1}/>High Analysis<img src={H2}/>Certified Institute</div>
<div className='mt-2'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white  '>Read More</button></div>
</div>
</div>


<div className='text-3xl ml-[600px] mt-[100px] font-medium	'>Find Top Freelancers<img className='mt-4 ml-[60px]' src={AA} /></div>


<div className='w-[99vw] h-[240px] flex gap-7 mt-[40px] rounded-md'>
<div className='w-[20vw]  bg-[#EEF8F9] ml-[50px]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z1} /></div><div className='text-2xl ml-4 mt-10  font-medium	'><b>Writing &<br/>Translation</b><br/><div className='text-sm mt-4 font-normal	inter'><span className='font-normal inter'>218,356 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FEF8F8]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z2} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Programming &<br/>Software</b><br/><div className='text-sm mt-4'><span>309,834 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#EEECF7]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z3} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Design &<br/>Art</b><br/><div className='text-sm mt-4'><span>210,234 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FDF6E4]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z4} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Administrative &<br/>Secretarial</b><br/><div className='text-sm mt-4'><span>100,130 Freelancers</span></div></div><div></div></div>
</div>

<div className='w-[99vw] h-[240px] flex gap-7 mt-[40px] rounded-md'>
<div className='w-[20vw] bg-[#DBD7FB] ml-[50px]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z5} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Sales &<br/>Marketing</b><br/><div className='text-sm mt-4'><span>76,605 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#D3FFDE]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z6} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Engineering &<br/>Architecture</b><br/><div className='text-sm mt-4'><span>53,308 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#FFE2C8]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z7} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Business &<br/>Finance</b><br/><div className='text-sm mt-4'><span>52,417 Freelancers</span></div></div><div></div></div>
<div className='w-[20vw] bg-[#D3EFFD]'><div className='w-[67px] h-[63px] mt-4 ml-4 rounded-md'><img src={Z8} /></div><div className='text-2xl ml-4 mt-10 font-medium'><b>Education &<br/>Traning</b><br/><div className='text-sm mt-4'><span>8,837 Freelancers</span></div></div><div></div></div>
</div>


<div className='mt-2 ml-[530px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[130px] mt-6 text-white font-medium '>See All Skills</button></div>

<div className='mt-[80px]'><span className='text-2xl text-[#1B3764] ml-[500px] font-medium'>It's Easy to Get Work Done on Alanced</span><img className='mt-4 ml-[650px]' src={AA} /></div>

<div className='flex gap-10 mt-12 ml-[100px]'>
    <img src={X1} />
    <img src={X2} />
    <img src={X3} />
    <img src={X4} />
</div>

<div className='flex ml-[100px] '>
    <div className='font-bold ' ><b>Post a Job</b></div>
    <div className='ml-[250px] font-bold'><b>Hire Freelancers</b></div>
    <div className='ml-[230px] font-bold'><b>Get Work Done</b></div>
    <div className='ml-[200px] font-bold'><b>Make Secure Payments</b></div>
</div>

<div className='flex mt-6 ml-[70px]'>
    <div className='font-normal	'><span>Create your free job posting and <br/>&nbsp;&nbsp;&nbsp;start receiving Quotes within <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hours.</span></div>
    <div className='ml-[90px]'><span>Compare the Quotes you receive <br/>&nbsp;&nbsp;&nbsp;and hire the best freelance <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;professionals for the job.</span></div>
    <div className='ml-[100px]'><span>&nbsp;&nbsp;&nbsp;Decide on how and when <br/>payments will be made and use<br/>&nbsp;&nbsp;&nbsp;WorkRooms to collaborate<br/>communicate and track work.</span></div>
    <div className='ml-[100px] -mt-[20px]'><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose from multiple payment<br/>&nbsp;&nbsp;&nbsp;mathods with SafePay payment<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;protection</div>
</div>


<div className='mt-2 ml-[490px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[100px] mt-6 text-white font-medium'>See How Alanced Work</button></div>


<div className='bg-blue-50 '>
<div className='mt-[70px] p-2'><b className='text-2xl  ml-[450px] mt-[50px] font-medium'>Why Over 3 Million People Choose Us</b><img className='mt-4 ml-[600px]' src={AA} /></div>


<div className='flex w-[90vw] gap-4 h-[400px] mt-14'>
    <div className=' w-[28vw]'>
        <div className='w-[100px] h-[100px] absolute ml-[200px]' style={{ backgroundImage: `url(${C1})` }}><img className='ml-[40px] mt-[35px]' src={C11}/></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[100px] '>01</span></div><div className='mt-3 ml-[220px] font-medium'><b>Credibility</b></div><div className='mt-3 ml-[100px]'><span className='ml-2'>We verify Freelancers, publish their Feedback <br/><span className='ml-2'>scores and All-Time Transaction Data to help</span><br/><span className='ml-2'>you identify time-tested professionals across</span><br/><span className='ml-[150px]'>the globe.</span></span><Link><img className='mt-4 ml-[100px]' src={C4} /></Link></div>
    </div>
    <div className=' w-[28vw]'> <div className='w-[100px] h-[100px] absolute ml-[150px]' style={{ backgroundImage: `url(${C2})` }}><img className='ml-[40px] mt-[35px]' /></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[50px] '>02</span></div><div className='mt-3 ml-[170px]'><b>Flexiblity</b></div><div className='mt-3 ml-[70px]'><span >We provide multiple Payment terms and<br/><span className='ml-2'>flexible Agreements to enable you to work<br/><span className='ml-[100px]'>the way you want.</span></span></span><Link><img className='mt-[50px] ml-[80px]' src={C4} /></Link></div>
    </div>


    
    <div className=' w-[28vw]'> <div className='w-[100px] h-[100px] absolute ml-[150px]' style={{ backgroundImage: `url(${C3})` }}><img className='ml-[40px] mt-[35px]' /></div>
        <div className='mt-[120px] ml-[150px]'><span className='ml-[50px] '>03</span></div><div className='mt-3 ml-[190px]'><b>Value</b></div><div className='mt-3 ml-[60px]'><span>We have the lowest fees in the industry,<br/><span className='ml-2'>providing you with maximum value at <br/><span className='ml-[100px]'>minimum cost.</span></span></span><Link><img className='mt-[50px] ml-[80px]' src={C4} /></Link></div>
    </div>
</div>

<div className='mt-2 ml-[490px] p-2'><button className='font-medium bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-[50px] mt-6 text-white  '>Why Choose Alanced</button></div>
</div>
<div >
<div className='mt-[80px]'><b className='text-2xl  ml-[580px] font-medium'>Work Your Way</b><img className='mt-4 ml-[600px]' src={AA} /></div>
</div>

<div className='flex'>
    <div className=' w-[35vw] -mt-[80px] ml-[200px] '><img src={V1} /></div>
    <div className=' w-[45vw] mt-[80px] '>
    <div className='font-medium'><>Choose from four payments terms and create Agreements.</></div><br/>
    <div className='ml-[40px] '><span className='font-medium'>Fixed Price</span><br/><br/><span className='text-gray-400'>Set a total fixed cost for your job and create milestones to ensure you're<br/>satisfied every step of the way. Set a due date and the amount to be<br/>paid for each milestone.</span></div><br/>
    <div className='ml-[40px] font-medium'><span className='font-medium'>Hourly<br/><br/>Task-Based<br/><br/>Recurring Payment</span></div>
    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 ml-2 mt-6 text-white font-medium'>Learn About Agreements</button></div>
 </div>
</div>

<div className='flex bg-blue-50'>
    <div className=' w-[35vw] ml-[50px]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl font-normal '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span className='text-gray-400'>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6 text-white  '>Sign In</button></div>
</div>
    </div>
    <div className=' w-[45vw]'><img src={V2} /></div>
</div>


<div className='flex gap-4 mt-[100px] h-[40vh]'>
    <div className=' w-[20vw] '><span className='ml-[30px] font-semibold'><b >Product</b><br/><br/>
    <div className='text-gray-400'><span ><Link className='ml-[30px] text-gray-400 hover:text-gray-400 '>Employee database</Link><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Payroll</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Absences</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Time tracking</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Shift planner</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Recruiting</Link></span></span></div>
    </span></div>





    <div className=' w-[20vw]'><span className='ml-[30px] font-semibold	'><b >Information</b><br/><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>FAQ</Link><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Blog</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Support</Link></span></span></span></div>



    <div className='w-[20vw]'><span className='ml-[30px] font-semibold	'><b >Company</b><br/><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>About Us</Link><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Carrers</Link></span><br/><span className='ml-[30px]'><Link className='text-gray-400 hover:text-gray-400'>Contact Us</Link></span><br/><span className='ml-[30px]'><Link></Link></span></span></span></div>



    <div className='w-[20vw] bg-blue-50 p-2'>
        <span className='ml-4 mt-4 font-semibold	'><b>Subscribe</b><br/><br/>
        <div><input className='h-8 ml-4 border' type='email' placeholder='Email address ml-4'/><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2'><img src={B1}/></button></div><br/><span className='text-sm text-gray-400'>Hello, we are Lift Media. Or goal is to translate the positive effects from revolutionizing how companies engage with their clients & thier team.</span></span>
    </div>
</div><hr/>

<div className='flex gap-[200px]'>
    <div className='ml-2 w-[20vw] flex'><img src={B2}/><div className='ml-2 text-black text-2xl' ><b>A L A N C E D</b></div></div>
    <div className=' w-[20vw]'><span className='gap-6'><b><Link className='text-black hover:text-black'>Terms</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link className='text-black hover:text-black'>Privacy</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link className='text-black hover:text-black'>Cookies</Link></b></span></div>
    <div className=' flex w-[20vw] ml-[200px] hover:green'><Link className='hover:bg-green'><img src={B3}/></Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link className='hover:bg-green'><img src={B4}/></Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link className='hover:bg-green'><img src={B5}/></Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
</div>

         </div>
         
         

    </>
  )
}
