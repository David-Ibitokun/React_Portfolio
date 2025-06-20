import React from 'react'
import Image from '../assets/images/R.gif'
import RotatingText from '../effects/rotating_text'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "I enjoy turning ideas into real, functional web applications, combining creativity with clean, efficient code."
    ],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 1500,
  })

  return (
    <section id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md justify-center items-center">
            <h1 className="mb-7 text-5xl font-bold">Home Page</h1>

            <div className='flex mt-5 text-2xl font-bold justify-center items-center text-center flex-col'>
              <div className='justify-center items-center text-center'>Ibitokun David is a</div>

              <RotatingText
                texts={['Software Engineer', 'UI/UX Designer', 'BackEnd Engineer']}
                mainClassName="px-1 sm:px-1 md:px-1.5 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
                staggerFrom={"front"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <div className="mb-5 mt-5 text-lg font-medium text-white">
              {text}
              <Cursor cursorStyle="|" />
            </div>

            <button className="btn btn-primary">
              <Link className="font-bold" to="contact" smooth={true} duration={500}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
