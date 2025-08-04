import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export default function footer() {
  return (
    <div>
        <footer className="footer footer-horizontal footer-center rounded p-10 bg-neutral text-neutral-content">
  {/* <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> */}
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://github.com/David-Ibitokun'>
        <FaGithub className='text-4xl cursor-pointer h-[24px] w-[24px] text-white'/>
      </a>
      {/* <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a> */}
      <a href='https://www.linkedin.com/in/david-ibitokun-58299226a/'>
        <FaLinkedinIn className='text-4xl cursor-pointer h-[24px] w-[24px] text-white'/>
      </a>
    </div>
  </nav>
  <div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by David Industries Ltd</p>
  </div>
</footer>
    </div>
  )
}
