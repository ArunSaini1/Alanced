import React from 'react'
import P1 from '../Images/P1.svg'
import P2 from '../Images/P2.svg'
import P11 from '../Images/P11.svg'
import P12 from '../Images/P12.svg'
import P13 from '../Images/P13.svg'
import P14 from '../Images/P14.svg'
import Frame from '../Images/Frame.svg'
import Frame1 from '../Images/Frame1.svg'
import Payment from '../Images/Payment.svg'
import Rating from '../Images/Rating.svg'
import Location from '../Images/Location.svg'
import AA from '../Images/AA.svg'
import V2 from '../Images/V2.svg'
import B1 from '../Images/B1.svg'
import B2 from '../Images/B2.svg'
import B3 from '../Images/B3.svg'
import B4 from '../Images/B4.svg'
import B5 from '../Images/B5.svg'
import bg from '../Images/Background.svg'
import t1 from '../Images/t1.svg'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import Search from '../Images/Search.svg'
import t2 from '../Images/t2.svg'
import t3 from '../Images/t3.svg'
import Bg1 from '../Images/Background.svg'
import pattern from '../Image2/pattern.svg'


export default function Profile() {
  return (
    <div>

<div>
<div className='sticky top-0 h-[100px] fixed z-10' style={{backgroundImage:`url(${Bg1})`}}>
    <div><img src={pattern}/></div>
    <div className='ml-[150px] -mt-[60px] flex'>
      <div><Link><img src={B2}/></Link><Link><span className='ml-2 text-2xl mt-3 text-black '></span></Link></div>
      <div className='ml-[50px]'>
      <Select label="Find Work">
      <Option><Link to='/savejobs'>Saved Jobs</Link></Option>
     <Option><Link to='/proposals'>Proposals</Link></Option>
     <Option><Link to='/projectlist'  >Project List</Link></Option>
    </Select>
      </div>


      <div className='ml-[10px] '> <Select label="My Jobs">
      <Option><Link to='/myjobs'>My Jobs</Link></Option>
      <Option><Link to='/allcontracts'>All Contracts</Link></Option>
      <Option><Link to='/connecthistory'>Connect History</Link></Option>
    </Select></div>
    <div className='ml-4 '><Link className='text-black font-medium' to='/report'>Reports</Link></div>
  <div className='ml-4 text-black-500'><Link className='text-black font-medium' to='/messages'>Messages</Link></div>

  <div className='flex ml-4 -mt-[20px] h-[5px]'>
        <div className='w-[180px] h-[3px] mt-2'>        
    <input type="search" id="default-search" className=" h-[3px] border-r-black block w-full p-4 pl-10 text-sm text-white-900 border border-white-300 rounded-lg bg-white-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white " placeholder="Search." required/>
</div>
    <div className='mt-2 h-[48px]'>
    <Select className='h-[48px]' label='Project'>
        <Option>Talent</Option>
        <Option>Project</Option>
        <Option>Jobs</Option>
    </Select>
</div>
    
<div className='mr-[30px] mb-[31px] h-[20px]'>
<button type="submit" className=" -mt-[20px] text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>

</div>
    </div>

   
    </div>
</div>

    {/* ///////////////////////////////////////////// */}
      {/* <div className='flex h-[80px] gap-2 sticky top-0'  style={{ backgroundImage: `url(${bg})` }}>
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

  </div> */}

      {/* //////////////////////////////////////////////////////////// */}
      <div className='h-[250px] bg-cover w-full' style={{ backgroundImage: `url(${P2})` }}>
        <div className='text-4xl ml-[100px]'>
            <div className='mt-4'><span className='mt-[90px]'>Wednesday, August 30th<br/><br/><b>Good Evening, Vijay Parmar.</b></span></div>
        </div>
      </div>
      

      <div className='mt-[50px] w-[80vw]'>
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


      <div className='flex w-[96vw] gap-6 mt-4 ml-4'>
        <div className='bg-blue-200 w-[30vw] rounded-xl'>
            <div className='mt-10 ml-8'><span><b>Import A Certification</b><br/><br/>Showing a credential may<br/> incrrease your chances of<br/> earning by 4 times.</span></div>
            <div className='ml-[250px]'><img src={P12}/></div>
        </div>
        <div className='bg-blue-200 w-[30vw] rounded-xl border'>
        <div className='mt-10 ml-8'><span><b>Get Tips To Find Work</b><br/><br/>Learn how to optimize search<br/> use Connects, and more to<br/> land your first job.</span></div>
            <div className='ml-[250px]'><img src={P13}/></div>
        </div>
        <div className=' w-[30vw] rounded-xl'>
        <div className='mt-10 ml-8'><span><b>My Jobs</b><br/><br/>View your active contracts,<br/> timesheets, and available<br/> earnings.</span></div>
            <div className='ml-[250px]'><img src={P14}/></div>
        </div>

      </div>

      

      <div className='flex w-[96vw]  mt-6 h-[200vh] gap-6'>
        <div className='w-[30vw] text-center text-xl'>
            <div className='mt-4'>
            <div><Select label="Connects">
                <Option></Option>
                </Select></div><br/>

                <div><Select label="Preferences">
                <Option></Option>
                </Select></div><br/>

                
                <div><Select label="Proposals">
                <Option></Option>
                </Select></div><br/>

                
                <div><Select label="Project Catalog">
                <Option>Upwork Academy</Option>
                <Option>Get Paid</Option>
                <Option>Community & Forums</Option>
                <Option>Help Center</Option>
                </Select></div><br/>

            </div>
        </div>
        <div className='w-[65vw] '>
            <div><span className='ml-6 mt-6'>Jobs You MIght Like</span><br/><br/><span className='ml-6'>Best Matches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most Recent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saved Jobs<br/><br/><span className='ml-6'>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</span></span></div>
        
            <div className='bg-blue-200 mt-4'>
                <div className='flex ml-4' ><b>Graphic Designer </b><div className='ml-[500px]'><img src={Frame}/></div><div className='ml-[30px]'><img src={Frame1}/></div></div><br/>
                <div className='ml-6'>Fixed-price-Expert-Est.Budget:$10-Posted in 12 hours</div><br/>
                <div className='ml-4'>Job Description: Graphic Designer for Vogue Tourism in Ajmer Only for Ajmer ( Rajasthan ) OFFLICE Plase Share Your Details On this Whatsapp No. +91 95094 98242 Are you a talented and imaginative Graphic Desigm=ner with a flair for creating visually stunning and engaging designs? Vogue Tourism, a premier name in the travel and hospitality sector, is <Link to='/more'><b>More</b></Link> </div>
           <br/><div className='flex gap-8 ml-4'>
            <button className='bg-white rounded-md p-2'>Social Media Imagery</button> <button className='bg-white rounded-md p-2'>Infographic</button> <button className='bg-white rounded-md p-2'>Ebook</button> <button className='bg-white rounded-md p-2'>Landing Page</button> <button className='bg-white rounded-md p-2'>Clothing</button><br/> <button className='bg-white rounded-md p-2'>Brand Identity & Guidelines</button>
          
          </div><br/> 
           <div className='mt-2 ml-4'>   
           <span>Proposals : Less Than 5</span>
            </div><br/>

            <div className='flex ml-4 gap-6'>
                <div><img src={Payment} /></div>
                <div><span>Payment verified</span></div>
                <div><img src={Rating}/></div>
                <div>$0 Spent</div>
                <div><img src={Location} /></div>
                <div>India</div>

            </div>

            </div>



            <div className=' mt-4'>
                <div className='flex ml-4' ><span>UI Designer - Landing Page</span><div className='ml-[500px]'><img src={Frame}/></div><div className='ml-[30px]'><img src={Frame1}/></div></div><br/>
                <div className='ml-6'>Fixed-price-Expert-Est.Budget:$10-Posted in 12 hours</div><br/>
                <div className='ml-4'>Job Description: Graphic Designer for Vogue Tourism in Ajmer Only for Ajmer ( Rajasthan ) OFFLICE Plase Share Your Details On this Whatsapp No. +91 95094 98242 Are you a talented and imaginative Graphic Desigm=ner with a flair for creating visually stunning and engaging designs? Vogue Tourism, a premier name in the travel and hospitality sector, is <b>More</b> </div>
           <br/><div className='flex gap-8 ml-4'>
            <button className='bg-white rounded-md p-2'>Social Media Imagery</button> <button className='bg-white rounded-md p-2'>Infographic</button> <button className='bg-white rounded-md p-2'>Ebook</button> <button className='bg-white rounded-md p-2'>Landing Page</button> <button className='bg-white rounded-md p-2'>Clothing</button><br/> <button className='bg-white rounded-md p-2'>Brand Identity & Guidelines</button>
          
          </div><br/> 
           <div className='mt-2 ml-4'>   
           <span>Proposals : Less Than 5</span>
            </div><br/>

            <div className='flex ml-4 gap-6'>
                <div><img src={Payment} /></div>
                <div><span>Payment verified</span></div>
                <div><img src={Rating}/></div>
                <div>$0 Spent</div>
                <div><img src={Location} /></div>
                <div>India</div>

            </div>

            </div>


            <div className=' mt-4'>
                <div className='flex ml-4' ><span>Design posts social media</span><div className='ml-[500px]'><img src={Frame}/></div><div className='ml-[30px]'><img src={Frame1}/></div></div><br/>
                <div className='ml-6'>Fixed-price-Expert-Est.Budget:$10-Posted in 12 hours</div><br/>
                <div className='ml-4'>Job Description: Graphic Designer for Vogue Tourism in Ajmer Only for Ajmer ( Rajasthan ) OFFLICE Plase Share Your Details On this Whatsapp No. +91 95094 98242 Are you a talented and imaginative Graphic Desigm=ner with a flair for creating visually stunning and engaging designs? Vogue Tourism, a premier name in the travel and hospitality sector, is <b>More</b> </div>
           <br/><div className='flex gap-8 ml-4'>
            <button className='bg-white rounded-md p-2'>Social Media Imagery</button> <button className='bg-white rounded-md p-2'>Infographic</button> <button className='bg-white rounded-md p-2'>Ebook</button> <button className='bg-white rounded-md p-2'>Landing Page</button> <button className='bg-white rounded-md p-2'>Clothing</button><br/> <button className='bg-white rounded-md p-2'>Brand Identity & Guidelines</button>
          
          </div><br/> 
           <div className='mt-2 ml-4'>   
           <span>Proposals : Less Than 5</span>
            </div><br/>

            <div className='flex ml-4 gap-6'>
                <div><img src={Payment} /></div>
                <div><span>Payment verified</span></div>
                <div><img src={Rating}/></div>
                <div>$0 Spent</div>
                <div><img src={Location} /></div>
                <div>India</div>

            </div>

            </div>

            
        </div>
      </div>


      <div className='flex bg-blue-100 ml-[50px] mr-[50px]'>
    <div className=' w-[35vw]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl  '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6 text-white '>Sign In</button></div>
</div>
    </div>
    <div className=' w-[45vw]'><img src={V2} /></div>
</div>


<div className='flex gap-4 mt-[100px] h-[40vh] ml-[70px]'>
    <div className=' w-[20vw] '><span className='ml-[30px]'><b >Product</b><br/><br/><span className='ml-[30px]'>Employee database<br/><span className='ml-[30px]'>Payroll</span><br/><span className='ml-[30px]'>Absences</span><br/><span className='ml-[30px]'>Time tracking</span><br/><span className='ml-[30px]'>Shift planner</span><br/><span className='ml-[30px]'>Recruiting</span></span></span></div>
    <div className=' w-[20vw]'><span className='ml-[30px]'><b >Information</b><br/><br/><span className='ml-[30px]'>FAQ<br/><span className='ml-[30px]'>Blog</span><br/><span className='ml-[30px]'>Support</span></span></span></div>
    <div className='w-[20vw]'><span className='ml-[30px]'><b >Company</b><br/><br/><span className='ml-[30px]'>About Us<br/><span className='ml-[30px]'>Carrers</span><br/><span className='ml-[30px]'>Contact Us</span><br/><span className='ml-[30px]'>Lift Media</span></span></span></div>
    <div className='w-[20vw] bg-blue-100 p-2'>
        <span><b>Subscribe</b><br/><br/>
        <div><input className='h-8 ml-4' type='email' placeholder='Email address'/><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2'><img src={B1}/></button></div><br/><span className='text-sm'>Hello, we are Lift Media. Or goal is to translate the positive effects from revolutionizing how companies engage with their clients & thier team.</span></span>
    </div>
</div><hr/>

<div className='flex gap-[200px] ml-[120px]'>
    <div className='ml-2 w-[20vw]'><img src={B2}/></div>
    <div className=' w-[20vw]'><span><b>Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookies</b></span></div>
    <div className=' flex w-[20vw]'><img src={B3}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B4}/>&nbsp;&nbsp;&nbsp;&nbsp;<img src={B5}/>&nbsp;&nbsp;&nbsp;&nbsp;</div>
</div>
    </div>
  )
}
