import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import BG from '../assets/images/Black and White Stars gif.gif'
export default function about() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Form submitted!",
      text: "Your form has been submitted successfully.",
      icon: "success",
      background: "#000",
      color: "#fff"
    });

    emailjs
      .sendForm('service_6crgemb', 'template_z8crh4w', form.current, {
        publicKey: 'ezbHocrq54qJNnVtS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
    <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="py-6">
        I’m always excited to connect, collaborate, or just have a chat about web development, technology, or new opportunities. <br />Whether you have a project idea, need a developer, or just want to say hello. Feel free to reach out!
      </p>
    </div>
    <div className="card border-2 border-l-stone-400 w-full max-w-sm shrink-0 shadow-2xl bg-transparent backdrop-blur">
      <div className="card-body">
        
        <form ref={form} onSubmit={sendEmail}>
          <label className="label text-white">Your name</label>
          <input type="text" name='user_name' className="input bg-transparent" required placeholder="Your name" />
          <div className='mt-5'></div>
          <label className="label text-white">Email</label>
          <input type="email" name='user_email' className="input bg-transparent" required placeholder="Email" />
          <div className='mt-5'></div>
          <label className="label text-white">Subject</label>
          <input type="text" name='subject' className="input bg-transparent" required placeholder="Subject" />
          <div className='mt-5'></div>
          <label className="label text-white">Message</label>
          <textarea name='message' className="textarea  bg-transparent" required placeholder="Message"></textarea>
          
          <div className='mt-2'>
          <button type='submit' className="btn mt-4 w-full">Send Message</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</div>
      </section>
      </div>
  )
}
