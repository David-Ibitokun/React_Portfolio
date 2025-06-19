import React from 'react'
import Image from '../assets/images/R.gif'
import TiltedCard from '../effects/hover_card';
import Profile from '../assets/images/profile1.jpg'
import RotatingText from '../effects/rotating_text';  
import {Link} from 'react-scroll';
// import Planent from '../assets/images/giphy-downsized.gif'
export default function hero() {
  return (
    <>
    {/* <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
        </div>
  </div>
</div> */}

<section id="home">
<div className="hero min-h-screen"
  style={{
    backgroundImage: `url(${Image})`, // Use your image here
    backgroundSize: 'cover', // Ensure the image covers the entire hero section
}}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md justify-center items-center">
      <h1 className="mb-7 text-5xl font-bold">Home Page</h1>
  <div className='flex mt-5 text-2xl font-bold justify-center items-center text-center flex-col'>
    <div className='justify-center items-center text-center'>Ibitokun David is a</div>
<RotatingText
  texts={['Software Engineer', 'Designer', 'UI/UX', 'BackEnd Engineer']}
  mainClassName="px-1 sm:px-1 md:px-1.5 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
  staggerFrom={"front"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/> </div>
      <p className="mb-5 mt-1">
        I enjoy turning ideas into real, functional web applications, combining creativity with clean, efficient code.
      </p>
      <button className="btn btn-primary">
        <Link className="text font-bold" to="contact" smooth={true} duration={500} >Contact Me </Link>
      </button>
    </div>
  </div>
</div>
</section>

{/* <div
  className="hero min-h-screen"
  style={{
    backgroundImage: Image,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
    </>
  )
}
