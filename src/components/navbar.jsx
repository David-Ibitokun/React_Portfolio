import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll';
import { TiThMenu } from "react-icons/ti";
function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    
    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme("synthwave");
        } else {
            setTheme("Dark");
        } 
    }

    //const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
     useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
     },[theme])
    return (
        <>
{/* <div>
      <nav className="fixed top-0 w-full z-50">
<div className="navbar bg-neutral text-neutral-content">
  <div className="navbar-start ">

  <div className="ml-4 text-xl">
    <a className="text-2xl font-bold text-">David</a>
  </div>
  </div>  
  <div className="navbar-end">  
  <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <TiThMenu className='cursor-pointer h-[24px] w-[24px] text-white'/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-auto dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link className="" to="home" smooth={true} duration={500} > <li><a>Home</a></li> </Link>
        <Link className="" to="about" smooth={true} duration={500} > <li><a>About</a></li> </Link>
        <Link className="" to="skills" smooth={true} duration={500} > <li><a>Skills</a></li> </Link>
        <Link className="" to="contact" smooth={true} duration={500} > <li><a>Contact</a></li> </Link>
      </ul>
    </div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16.5px] font-bold">
      <Link to="home" smooth={true} duration={500} > <li><a>Home</a></li> </Link>
      <Link to="about" smooth={true} duration={500} > <li><a>About</a></li> </Link>
      <Link to="skills" smooth={true} duration={500} > <li><a>Skills</a></li> </Link>
      <Link to="contact" smooth={true} duration={500} > <li><a>Contact</a></li> </Link>
    </ul>
  </div>
    {/* <div className="navbar-end">
{/*       
    <label className="swap swap-rotate">
  <input type="checkbox" onChange={handleToggle}/>

  {/* sun icon *
  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon 
  <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label> 
  </div> */}
{/* </div>
</nav>
</div> */} 
        
        
      {/* <header class="flex fixed top-0 z-100 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-900">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-bold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
        David
      </a>
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
          <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
    <div className=" hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:ps-5 text-1.5xl font-bold">
        <Link className="cursor-pointer hover:bg-neutral-800" to="home" smooth={true} duration={500} > <a>Home</a> </Link>
        <Link className="cursor-pointer" to="about" smooth={true} duration={500} > <a>About</a> </Link>
        <Link className="cursor-pointer" to="skills" smooth={true} duration={500} >  <a>Skills</a> </Link>
        <Link className="cursor-pointer" to="contact" smooth={true} duration={500} > <a>Contact</a> </Link>
      </div>
    </div>
  </nav>
</header>    */}
        
<header class="flex fixed top-0 z-100 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-900">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-bold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
        David
      </a>
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
          <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
    <div id="hs-navbar-example" class="max-w-fit hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
      <div class="mr-1 flex font-bold flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:ps-5">
        
        <Link className="cursor-pointer" to="home" smooth={true} duration={500} > <a>Home</a> </Link>
        <Link className="cursor-pointer" to="about" smooth={true} duration={500} > <a>About</a> </Link>
        {/* <Link className="cursor-pointer" to="skills" smooth={true} duration={500} >  <a>Skills</a> </Link> */}
        <Link className="cursor-pointer" to="contact" smooth={true} duration={500} > <a>Contact</a> </Link>
      </div>
    </div>
  </nav>
</header>



        </>

    );
} export default Navbar; 