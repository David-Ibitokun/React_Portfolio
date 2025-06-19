import React from 'react'

export default function about() {
  return (
    <div>      
        <section id="contact">
        <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="py-6">
        I’m always excited to connect, collaborate, or just have a chat about web development, technology, or new opportunities. <br />Whether you have a project idea, need a developer, or just want to say hello — feel free to reach out!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Message</label>
          <textarea className="textarea" placeholder="Message"></textarea>
          <div className='mt-2'></div>
          <button className="btn btn-neutral mt-4">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
      </section>
      </div>
  )
}
