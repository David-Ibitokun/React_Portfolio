import React from 'react'
import BG from '../assets/images/Black and White Stars gif.gif'
export default function about() {
  return (
    <div>      
        <section id="contact">
                <div
                  className="hero min-h-screen"
                  style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                  }}
                >
        <div className="hero-overlay"></div>
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="py-6">
        I’m always excited to connect, collaborate, or just have a chat about web development, technology, or new opportunities. <br />Whether you have a project idea, need a developer, or just want to say hello — feel free to reach out!
      </p>
    </div>
    <div className="card border-2 border-l-stone-400 w-full max-w-sm shrink-0 shadow-2xl bg-transparent backdrop-blur">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label text-white">Email</label>
          <input type="email" className="input bg-transparent" placeholder="Email" />
          <label className="label text-white">Message</label>
          <textarea className="textarea  bg-transparent" placeholder="Message"></textarea>
          <div className='mt-2'></div>
          <button className="btn mt-4">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
      </section>
      </div>
  )
}
