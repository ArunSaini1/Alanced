import React from 'react'
import P1 from './Images/P1.svg'
import S1 from './Images/S1.svg'
import S2 from './Images/S2.svg'
import S3 from './Images/2.svg'
import S4 from './Images/3.svg'
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


export default function Search2() {
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
      <button className=' mt-6 ml-8 p-2 rounded-xl'>Search Jobs</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='p-2 rounded-xl bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white'>Search</button><br/><br/>

<div className='flex w-[100vw]'>
    <div className=' w-[30vw]'>
    <div className=' w-[30vw] ml-4'>
    <Select label='Category'>
    <Option><input type='search' placeholder='Search' className='border rounded-md p-2'/></Option>
    </Select>
            {/* <div><b>Category</b><br/></div><br/> */}
            {/* <div><input type='search' placeholder='Search' className='border rounded-md'/></div> */}
            <br/><br/>

            <div><b>Experience Level</b><br/></div><br/>
            <div>
            <div>            <input type='checkbox'/> &nbsp;<span>Entry Level <span className='ml-[280px]'>(22083)</span></span>
</div>
<div>            <input type='checkbox'/> &nbsp;<span>Intermediate <span className='ml-[270px]'>(108277)</span></span>
</div>           
<div> <input type='checkbox'/> &nbsp;<span>Expert <span className='ml-[310px]'>(60302)</span></span>
</div>
            </div><br/><br/>



            <div> <b>Job Type</b><br/>
            <input type='range'/><br/>
            <button className='border rounded-md p-2'>$20</button>&nbsp;&nbsp;-&nbsp;&nbsp;<button className='border rounded-md p-2'>$70987</button>
            </div><br/><br/>


            <div>

            <div><b>Number Of Proposals</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>Less than 5 <span className='ml-[280px]'>(15776)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>5 to 10 <span className='ml-[300px]'>(16718)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>10 to 15 <span className='ml-[290px]'>(11518)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>15 to 20 <span className='ml-[290px]'>(7732)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>20 to 50 <span className='ml-[290px]'>(15211)</span></span>
            </div><br/>
            <br/><br/><br/>



            <div><b>Client Info</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>My Previous clients<span className='ml-[250px]'>(1945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>Payment verified <span className='ml-[260px]'>(2945)</span></span>
            </div>
            
         <br/>
<br/><br/>


            <div><b>Client History</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>No hires<span className='ml-[300px]'>(1945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>1 to 9 hires <span className='ml-[280px]'>(2945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>10 + hires <span className='ml-[280px]'>(945)</span></span>
            </div>
         <br/><br/>


         <div><b>Client Location</b><br/></div><br/>
            <div><input type='search' placeholder='Select clientlocations' className='border rounded-md p-2'/></div>
<br/><br/>



<div><b>Client Time Zones</b><br/></div><br/>
            <div><input type='search' placeholder='Select client time zones' className='border rounded-md p-2'/></div><br/><br/>



            <div><b>Project Length</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>Less than one month <span className='ml-[360px]'>(15776)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>1 to 3 months <span className='ml-[250px]'>(16718)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>3 to 6 months <span className='ml-[250px]'>(11518)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>More than 6 months <span className='ml-[360px]'>(7732)</span></span>
            </div>
<br/><br/>
<div><b>Hours Per Week</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>Less than 30 hrs/week <span className='ml-[360px]'>(1945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>More than 30 hrs/week<span className='ml-[300px]'>(2945)</span></span>
            </div> <br/><br/>


            <div><b>Connects Needed</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>4 or less connects <span className='ml-[220px]'>(15776)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>8 connects <span className='ml-[250px]'>(16718)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>12 connects<span className='ml-[250px]'>(11518)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>16 connects<span className='ml-[250px]'>(7732)</span></span>
            </div>
            

            
            </div>
        </div>
    </div>
    <div className='w-[70vw]'>
    <div className='mt-[100px] ml-[60px] bg-blue-100 p-2'>
    <div className='flex gap-4 '>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>





   <div className='mt-[100px] ml-[60px]'>
    <div className='flex gap-4'>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md  p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>



   <div className='mt-[100px] ml-[60px]'>
    <div className='flex gap-4'>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>




   <div className='mt-[100px] ml-[60px]'>
    <div className='flex gap-4'>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>





   <div className='mt-[100px] ml-[60px]'>
    <div className='flex gap-4'>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>





   <div className='mt-[100px] ml-[60px]'>
    <div className='flex gap-4'>


    
        <div ><b>Graphic Designer</b></div><br/>
        <div className='ml-[700px]'><img src={S1}/></div>
        <div><img src={S2}/></div>
    </div><br/>
    <div>Fixed-price-Expert_est Budget : $10-Posted in 12 hours</div><br/>
    <div>Job Description : Graphic Designer for Vogue Tourism in ajmer ( Rajasthan ) Offline  Please share your details<br/> on this whatsapp No +91 95094 98242 are you a talented and immaginative graphic designer with a flair for<br/> creating visually stunning and engaging designs? vogue tourism a premier name in the travel and hospitality sector is <b>More</b></div><br/>
   <div className='flex mt-4 gap-8'>
    <button className='border rounded-md p-2'>Social Media Imagery</button>
    <button className='border rounded-md p-2'>Infography</button>
    <button className='border rounded-md p-2'>Ebook</button>
    <button className='border rounded-md p-2'>Landing Page</button>
    <button className='border rounded-md p-2'>Clothing</button>
    <button className='border rounded-md p-2'>Brand Identity & Guidelines</button>

   </div><br/>
   <div><b>Proposals :</b> Less than 5</div><br/>
    <div className='flex gap-12'>
        <div><img src={S3}/></div>
        <div>Payment Verified</div>
        <div><img src={S4}/></div>
        <div>$ 0 Spent</div>
        <div>India</div><br/><br/>
        
    </div>
   </div>


    </div>
</div>



   <div className='flex bg-blue-100 p-2 ml-[50px] mr-[50px]'>
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
