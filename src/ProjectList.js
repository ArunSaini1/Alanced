import React from 'react'
import P19 from './Image2/Background.svg'
import P1 from './Images/P1.svg'
import P20 from './Images/P21.svg'
import AA from './Images/AA.svg'
import V2 from './Images/V2.svg'
import B1 from './Images/B1.svg'
import B2 from './Images/B2.svg'
import B3 from './Images/B3.svg'
import B4 from './Images/B4.svg'
import B5 from './Images/B5.svg'
import P30 from './Images/P30.svg'
import P31 from './Images/P31.svg'
import P32 from './Images/P32.svg'
import P33 from './Images/P33.svg'
import bg from './Images/Background.svg'
import t1 from './Images/t1.svg'
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom'
import Search from './Images/Search.svg'
import t2 from './Images/t2.svg'
import t3 from './Images/t3.svg'
import Bg1 from './Images/Background.svg'
import pattern from './Image2/pattern.svg'
import back from './Image2/Background.svg'




export default function ProjectList() {
  return (
    <div>

<div className='sticky top-0 h-[100px] fixed z-10' style={{backgroundImage:`url(${Bg1})`}}>
    <div><img src={pattern}/></div>
    <div className='ml-[150px] -mt-[60px] flex'><Link><img src={B2}/></Link><Link><span className='ml-2 text-2xl mt-3 text-black '><b></b></span></Link></div>

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







<div style={{backgroundImage:`url(${back})`}} className='h-[300px]  bg-cover ' >
<div className='flex bg-white ml-[150px] mr-[150px] h-[250px]'>
    <div className=' w-[750px]'>
        <div className='font-medium text-2xl ml-4 mt-[30px]'>Project List</div>
        <div className='text-gray-400 ml-4'>All the Lorem ispum genereators on the internet tend to repeat.</div><br/><br/><br/>
        
        
        <div>
        <form>   
    <div className='bg-white p-2 rounded-xl -mt-[50px]'>
    <div className="relative flex  h-[]  rounded-sm -mt-[20px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
            </svg>
        </div>
        <div className='flex'>
        <div className='w-[300px] ml-4 mt-4'>        
    <input type="search" id="default-search" className=" border-r-black block w-full p-4 pl-10 text-sm text-white-900 border border-white-300 rounded-lg bg-white-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white " placeholder="Search." required/><button type="submit" className=" -ml-[300px] text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

</div>


</div>

    </div>
    </div>
</form>

        </div>
    </div>
    <div className='bg-blue-400 w-[200px]'>2</div>
    <div className='bg-pink-400 w-[300px]'>3</div>
</div> 
</div>


























    <div className='flex mt-[30px]'>
        <div className='ml-[100px] '><b>5,512 Services available </b></div>
        <div className='ml-[900px]'><b>Sort by : Best Selling </b></div>
    </div>


    <div className='flex w-[100vw] mt-[20px]'>
        <div className=' w-[30vw]'>
            <div><b>Category</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>UX Designer <span className='ml-[250px]'>(1,945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>Web Developers <span className='ml-[250px]'>(2,945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Illustrators <span className='ml-[250px]'>(945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Node.js <span className='ml-[250px]'>(45)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Project Managers <span className='ml-[250px]'>(1,945)</span></span>
            </div><br/>
            <b>+ 20 More</b><br/><br/><br/>

            <div><b>Project Type</b><br/></div><br/>
            <div>
                <input type='button'/> &nbsp;<span>Fixed <span className='ml-[250px]'>(1,945)</span></span><br/>
                <input type='button'/> &nbsp;<span>Hourly <span className='ml-[250px]'>(2,945)</span></span>

            </div><br/><br/>



            <div> <b>Price</b><br/>
            <input type='range'/><br/>
            <button className='border rounded-md p-2'>$20</button>&nbsp;&nbsp;-&nbsp;&nbsp;<button className='border rounded-md p-2'>$70987</button>
            </div><br/><br/>


            <div>
            <div><b>Skills</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>Adobe Photoshop</span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>Adobe XD</span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Android Developer</span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Artist</span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Computer</span>
            </div><br/>
            <b>+ Show More</b><br/><br/><br/>


            <div><b>Citys</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>Boston <span className='ml-[250px]'>(1,945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>Florida <span className='ml-[250px]'>(2,945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Los Angeles <span className='ml-[250px]'>(945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Miami <span className='ml-[250px]'>(5,945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>New York <span className='ml-[250px]'>(45)</span></span>
            </div><br/>
            <b>+ Show More</b><br/><br/><br/>




            <div><b>Languages</b><br/></div><br/>
            <div>
                <input type='checkbox'/> &nbsp;<span>English <span className='ml-[250px]'>(1,945)</span></span>
            </div>

            <div>
                <input type='checkbox'/> &nbsp;<span>French <span className='ml-[250px]'>(2,945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Italian <span className='ml-[250px]'>(945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Japanese <span className='ml-[250px]'>(5,945)</span></span>
            </div>
            <div>
                <input type='checkbox'/> &nbsp;<span>Spanish <span className='ml-[250px]'>(45)</span></span>
            </div><br/>
            <b>+ Show More</b><br/><br/><br/>

            <button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white ml-[150px] rounded p-2 '>Send Proposal</button>

            
            </div>
        </div>
        <div className=' w-[70vw]'>
            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-mdp-2 '>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2'>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2 '>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2'>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2'>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2'>HTML 5</button>
                </div>
            </div>



            <div>
                <div className='flex ml-4 mt-6'>
                    <div><img src={P30}/></div>
                    <div className='ml-4'><b>Food Delevery Mobile App</b></div><br/>
                </div>
                <div className='flex gap-6 ml-[100px]'>
                    <div><img src={P31}/></div>
                    <div>London, UK |</div>
                    <div><img src={P32}/></div>
                    <div> 2 Hours ago |</div>
                    <div><img src={P33}/></div>
                    <div> 1 Received |</div>
                    <div className='ml-[300px]'><b>$100-$150</b></div>
                </div>
                <div className='ml-[90px]'>Many desktop publishing packages and web page editors <br/>now use Lorem ipsum as their defaultmodel text.</div>

                <div><button className='bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white p-2 rounded-xl ml-[800px]' >Send Proposal</button></div>
                <div className='flex gap-8'>
                    <button className='border rounded-md ml-[100px] p-2'>Figma</button>
                    <button className='border rounded-md p-2'>Sketch</button>
                    <button className='border rounded-md p-2'>HTML 5</button>
                </div>
            </div>
        </div>
    </div>
      





<div className='mt-[100px] '>
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

    </div>
  )
}
