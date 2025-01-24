import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";


const Navbar = ({cart}) => {
    const [Nav,setNav]=useState(false);
    const [cancelNav,setcancelNav]=useState(false);
    const handleNav=()=>{
        setNav(!Nav);
        setcancelNav(!cancelNav);
    }
  return (
    <div className='border-2 w-[100%] flex justify-between items-center p-[20px] h-[13vh] fixed top-0 bg-white z-50'>
      
        <Link to='/'>
        <p className='text-orange-600 text-2xl font-semibold hover:cursor-pointer'>Yummy<span className='text-black'>Food</span> </p>
        </Link>

       <div className=' hidden sm:block'>
       <ul className='flex gap-5 font-semibold text-2xl '>

           <Link to="/ourfoods">
           <li className='hover:text-orange-600 cursor-pointer'>Our Foods</li>
           </Link>

            <Link to="/Aboutus">
            <li className='hover:text-orange-600  cursor-pointer'>About Us</li>
            </Link>

            <Link to="/SignIn">
             <li className='hover:text-orange-600  cursor-pointer'>Contact</li>
            </Link>
           

        </ul>

       </div>
       <p className='absolute top-[10px] right-[38px] text-xl font-semibold'>{cart}</p>
        <div className='mr-2'>
          
        <FaCartShopping   size={32} className='hidden sm:block hover:cursor-pointer'/>
        <div className='inline sm:hidden '>
            <GiHamburgerMenu size={32} className='hover:cursor-pointer' onClick={handleNav}/>
          
            </div>
        </div>

        {
            Nav?(<div className=' absolute top-0 w-[100%] right-[1px]  bg-[white] z-[1]'>
                <ul className='font-semibold text-2xl h-[100vh] w-[100%] flex flex-col justify-center items-center '>
                    <Link to='/'>
                    <li className='text-4xl my-10 hover:text-orange-600 cursor-pointer' onClick={cancelNav}>Home</li>
                    </Link>

                    <Link to="/ourfoods">
                    <li className='text-4xl my-10 hover:text-orange-600 cursor-pointer' onClick={cancelNav}>Our Foods</li> 
                    </Link>

                    <Link to="/Aboutus">
                    <li className='text-4xl my-10 text-center hover:text-orange-600 cursor-pointer' onClick={cancelNav}>About Us</li>
                    </Link>

                     <Link to="/SignIn">
                     <li className='text-4xl my-10 text-center hover:text-orange-600 cursor-pointer' onClick={cancelNav}>Contact</li>
                     </Link>
                 </ul>
                 {cancelNav?( <RxCross2 size={35} onClick={handleNav} className='font-semibold absolute top-5 right-5 hover:cursor-pointer'/>):"" }
                </div>):""
        }
      </div>
    
  )
}

export default Navbar
