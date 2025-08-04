import React from 'react'
import Image from '../assets/images/R.gif'
import RotatingText from '../effects/rotating_text'
import { Link } from 'react-scroll'
import CountUp from '../effects/count_up'
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

            <div className='flex mt-5 text-2xl font-bold justify-center items-center text-center flex-col'>
              <div className='justify-center items-center text-center text-3xl font-bold'>Ibitokun David is a</div>
              <RotatingText
                texts={['Software Engineer', 'FrontEnd Designer', 'BackEnd Engineer']}
                mainClassName="px-1 sm:px-1 md:px-1.5 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg text-3xl font-bold"
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

            <div className="mb-5 mt-5 font-semibold text-[18px] text-white">
              {text}
              <Cursor cursorStyle="|" />
            </div>
            <div className='font-bold flex items-center justify-center flex-row text-2xl mb-5'>
              <p className='mr-[4px]'>Projects</p>
                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1.1}
                  className="count-up-text"
                /> <p>+</p>
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
