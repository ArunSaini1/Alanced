import React from 'react'
import P1 from '../Images/P1.svg'
import Fu1 from '../Images/Fu1.svg'
import Fu2 from '../Images/Fu2.svg'
import Fu4 from '../Images/Fu4.svg'
import Fu5 from '../Images/Fu5.svg'
import Fu6 from '../Images/Fu6.svg'
import {Link} from "react-router-dom";
import A15 from '../Images/A15.svg'
import A16 from '../Images/A16.svg'
import A17 from '../Images/A17.svg'
import A18 from '../Images/A18.svg'
import A19 from '../Images/A19.svg'
import A20 from '../Images/A20.svg'
import A21 from '../Images/A21.svg'
import A22 from '../Images/A22.svg'
import A23 from '../Images/A23.svg'
import A26 from '../Images/A26.svg'
import A25 from '../Images/A25.svg'
import A27 from '../Images/A27.svg'
import A28 from '../Images/A28.svg'
import W1 from '../Images/W1.svg'
import O1 from '../Images/O1.svg'
import O2 from '../Images/O2.svg'
import O3 from '../Images/O3.svg'
import AA from '../Images/AA.svg'
import V2 from '../Images/V2.svg'
import B1 from '../Images/B1.svg'
import B2 from '../Images/B2.svg'
import B3 from '../Images/B3.svg'
import B4 from '../Images/B4.svg'
import B5 from '../Images/B5.svg'
import bg from '../Images/Background.svg'
import t1 from '../Images/t1.svg'
import Search from '../Images/Search.svg'
import t2 from '../Images/t2.svg'
import t3 from '../Images/t3.svg'
import { Select, Option } from "@material-tailwind/react";





export default function FullProfile() {
  return (
    <div>
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
          <div className='mt-[30px] ml-[180px]'><img src={Fu1}/></div>

            <div className='flex'>
                <div className='mt-[50px] ml-[150px]'><img src={Fu2}/></div>
                  <div className='mt-[100px] ml-[300px]'>
                    <div className='text-xl -mt-[50px]'><span><b>Vijay Parmar </b><img className='ml-[130px] -mt-[20px]' src={Fu6}/></span></div><br/>
                    <div className=''><span>Vidisha, India - 3:11 pm local time</span></div>
                    <div><br/><button className='bg-white rounded-xl p-2'>Available now</button>&nbsp;&nbsp;&nbsp;<span>off</span><img className='ml-[160px] -mt-[30px]' src={Fu4}/></div><br/>
                    <div><img className='-mb-[30px]' src={Fu5}/><span className='ml-[50px]'>84% Job Success</span></div>
                  </div>
                  <div className='ml-[200px] mt-[30px]'>
                  <button className="text-white  bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Public View</button><br/><br/>
                  <Link to='/edit'><button className="text-white  bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile Setting</button></Link>
                  </div>
                  </div>
                </div>



                <div className='flex mt-4'>
                    <div className=' w-[30vw]'>
                        <div className='ml-[50px]'><b>Graphic Design</b></div><br/>
                        <div className='ml-4'><b>$300+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33</b></div>
                        <div className='ml-4'>Earnings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours</div><br/>

                        <div className='ml-4'><b>All Stats</b></div>
                        <div className='ml-4'><b>$1K+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33</b></div>
                        <div className='ml-4'>Total Earnings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jobs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours</div><br/>

                        <div className='ml-4'><b>Video Introduction &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +</b></div><br/>
                        <div className='ml-4'><b>Video Introduction</b><br/><span>More than 30 hrs/week<br/>Open to contract to hire</span></div><br/><br/>
                         
                        <div className='ml-4'><b>Video Introduction</b><br/><span>English : Native or Billingual<br/>Hindi : Native or Billingual</span></div><br/><br/>
                        <div className='ml-4'><b>Verifications</b><br/><span>Id : Verified<br/>Military Veteran</span></div><br/><br/>
                        <div className='ml-4'><b>Education</b></div><br/><br/>
                        <button className="text-white ml-4 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GitHub</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/stackoverflow' className='border p-2'>Stack Overflow</Link>


                         </div>


                         
                         
                    <div className=' w-[70vw]'>
                        <div><b>View Profile</b></div><br/>
                        <div className='flex gap-4'><button className="text-white ml-4 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Graphic Design</button><button className="text-white ml-4  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">UX/UI Design</button><button className="text-white ml-4  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">All Work</button></div><br/><br/>
                        <div>Graphic Design Specialist &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$8.00/Hr<br/>
                        I've been a graphic designer for more than 6+ years, assisting organizations and people to <br/>successfullt market thamselves. I have worked as a freelancer for both profit and nonprofit organizations.<br/> All facets of design, from letterhead newsletters and invitaions to huge graphics and website banners<br/> as well as website maintenance are under my area of expertise....<br/><b>See More</b></div><br/><br/>
                        <div className='flex gap-6'>
                        <div><b>Work History</b></div>
                        <div className='ml-[600px]'><img src={A15}/></div>
                        <div><img src={A16}/></div><br/>
                        </div>
<div className='flex'>
                        <div>Completed Jobs(4)</div>&nbsp;&nbsp;&nbsp;
                        <div>In Progress (2)</div><br/>
                        </div><br/>

                        <div>
                        <div className='flex gap-4'>
                        <div>Banner disigner for Dental Clinic<br/>Dec 26, 2022 - Dec 27, 2022</div>
                        <div className='ml-[450px]'><img src={A17}/></div>
                        <div>5.00</div>
                        </div><br/>
                        <div>"Great job and great guy to work witn!! Fast work and very responsive and skilled.<br/>Thank  you so much!"</div><br/>
                        <div className='flex gap-8'>
                        <div><b>$30.00</b></div>
                        <div className='ml-[200px]'><b>Fixed Price</b></div>
                        </div><br/><br/>

                        
                        </div>


                        
                        <div>
                        <div className='flex gap-4'>
                        <div>Looking for a banner Expert!!<br/>Dec 26, 2022 - Dec 27, 2022</div>
                        <div className='ml-[450px]'><img src={A17}/></div>
                        <div>5.00</div>
                        </div><br/>
                        <div>"Great job and great guy to work witn!! Fast work and very responsive and skilled.<br/>Thank  you so much!"</div><br/>
                        <div className='flex gap-8'>
                        <div><b>$30.00</b></div>
                        <div className='ml-[200px]'><b>Fixed Price</b></div>
                        </div><br/><br/>

                        
                        </div><br/><br/>


                        
                        <div>
                        <div className='flex gap-4'>
                        <div>Graphic design mock up for app need tonight<br/>Dec 26, 2022 - Dec 27, 2022</div>
                        <div className='ml-[450px]'><img src={A17}/></div>
                        <div>5.00</div>
                        </div><br/>
                        <div>"Great job and great guy to work witn!! Fast work and very responsive and skilled.<br/>Thank  you so much!"</div><br/>
                        <div className='flex gap-8'>
                        <div><b>$23.33</b></div>
                        <div className='ml-[200px]'><b>$10.00/Hr</b></div>
                        </div><br/><br/>

                        
                        </div>



{/* Protfolio start */}
<div><div className='flex gap-6'>
<div>Portfolio (4)</div>
<div className='ml-[600px]'><img src={A21}/></div>
<div><img src={A22}/></div>
<div><img src={A23}/></div>
</div>
<div><br/>
<div className='flex gap-6'>
<div><img src={A18}/></div>
<div><img src={A19}/></div>
<div><img src={A20}/></div>
</div>
</div>
</div>
{/* Portfolio End */}

<div className='mt-4'>
<div ><b>Skills & Expertise</b><br/>Graphic Design Delikvrables</div>
<div className='flex gap-8'>
    <button className='rounded-xl p-2 border'>Social Media Imagery</button>
    <button className='rounded-xl p-2 border'>Infographic</button>
    <button className='rounded-xl p-2 border'>Ebook</button>
    <button className='rounded-xl p-2 border'>Landing Page</button>
    <button className='rounded-xl p-2 border'>Clothing</button>
    <button className='rounded-xl p-2 border'>Brand Identity & Guidelines</button>

</div>
</div><br/>

<div>Graphic Design Services</div>

<div className='flex'>
<button className='rounded-xl p-2 border'>Advertising Design</button>
<button className='rounded-xl p-2 border'>Brand Odemtotu Design</button>
<button className='rounded-xl p-2 border'>Business Card Design</button>
<button className='rounded-xl p-2 border'>Brochure Design</button>
<button className='rounded-xl p-2 border'>Web Design</button>
<button className='rounded-xl p-2 border'>Banner Ad Design</button>
</div><br/><br/>

<div><b>Your Project Catalog</b></div><br/>
<div>Projects are a new way to earn on Upwork that helps you do more of the work you love<br/>to do. Create project offerings that highlight your strengths and attract more clients.</div>
                    </div>

                </div>
{/* ////////////////////Blue Div////////////////// */}

                <div className='mt-6 ml-4'>
                    <div><b>Testimonials</b><br/>Endorsements from past clients</div><br/>
                    <div className='ml-[600px]'><img src={A25}/></div>
                   <div className='ml-[450px]'> <span>Showcasing client testimonials can strengthen your profile. (+5%)</span><br/><span className='ml-[150px]'><b>Request a testimonial</b></span></div>
                </div>


                <div className=' mt-6 ml-4'>
                    <div><b>Certifications</b><br/>Endorsements from past clients</div><br/>
                    <div className='ml-[600px]'><img src={A26}/></div>
                   <div className='ml-[450px]'> <span>Listing your certifications can help prove your specific knowledge or abilities. (+10%) You can<br/>add them manually or import them from Credly.</span><br/><span className='ml-[150px]'><b>Add manually&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Import from Credly</b></span></div>
                </div><br/><br/>


                <div>
                    <div className='flex gap-6 ml-4'>
                    <div><b>Employment History </b></div>
                    <div className='ml-[1000px]'>+</div>
                    </div><br/>

                    <div className='flex gap-6 ml-4'>
                    <div><b>Graphic Designer | Wiz91 Technologies</b><br/><span>Januray 2021 - Present</span> </div>
                    <div className='ml-[1000px]'><img src={A27}/></div>
                    </div><br/>





                    <div className='flex gap-6 ml-4'>
                    <div><b>Graphic Designer | BrandWiz</b><br/><span>September 2020 - Januray 2021</span> </div>
                    <div className='ml-[1070px]'><img src={A27}/></div>
                    </div><br/>


                    <div className='flex gap-6 ml-4'>
                    <div><b>Graphic Designer | MediaInflame</b><br/><span>July 2019 - Setptember 2020</span> </div>
                    <div className='ml-[1050px]'><img src={A27}/></div>
                    </div><br/>
                    

                    <div className='text-center'><b>Show More</b></div><br/><br/>
                    <div className='flex gap-6 ml-4'>
                    <div><b>Graphic Experiences</b><br/><span>Endorsements from past clients</span> </div>
                    <div className='ml-[1050px]'>+</div>
                    </div><br/>
                    

                    <div className='ml-[650px]'><img src={A28}/></div>
                    <div className='ml-[450px]'>Highligthing relevant experience  can boost your visibility in our search results. (+5%)<br/><span className='ml-[150px]'><b>Add an experience</b></span></div>
                    
                    </div>


      


    <div className='flex bg-blue-100 ml-[50px] mr-[50px] mt-4'>
    <div className=' w-[45vw]'>
    <div className='mt-[120px] ml-[60px]'><b className='text-2xl  '>Get Book Copy Today!</b><img className='mt-4 ' src={AA} /></div>
   <div className='mt-[50px] ml-[60px]'><span>This the first true value generator on the internet. It uses alphas dicitionary of over 200 Latin words.</span>    <div className='mt-2 ml-[30px]'><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-md p-2 -ml-[30px] mt-6  '>Sign In</button></div>
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



{/* ////////////////////////////////////// */}

    </div>
  )
}
