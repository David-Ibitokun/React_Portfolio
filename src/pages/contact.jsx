import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FiMail, FiMapPin } from 'react-icons/fi';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

function getSwalTheme() {
  const style = getComputedStyle(document.documentElement);
  return {
    background: style.getPropertyValue('--color-surface-container').trim() || '#101415',
    color: style.getPropertyValue('--color-on-surface').trim() || '#e0e3e5',
  };
}

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      Swal.fire({
        title: 'Configuration Error',
        text: 'EmailJS public key is missing. Please check your .env file.',
        icon: 'error',
        ...getSwalTheme(),
      });
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_6crgemb', 'template_z8crh4w', form.current, {
        publicKey,
      })
      .then(
        () => {
          setIsSending(false);
          Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been transmitted successfully.',
            icon: 'success',
            ...getSwalTheme(),
          });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          Swal.fire({
            title: 'Transmission Failed',
            text:
              error.text ||
              'Something went wrong while sending your message. Please try again.',
            icon: 'error',
            ...getSwalTheme(),
          });
          console.error('EmailJS FAILED...', error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-5 py-24 md:px-6"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-2">
        <AnimatedSection animation="fade-right" className="flex flex-col">
          <span className="font-code text-sm text-primary-container">
            // TRANSMISSION_SIGNAL
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            Open Channel
          </h2>
          <p className="mt-4 max-w-md text-base text-on-surface-variant">
            I’m always excited to connect, collaborate, or just have a chat about
            web development, technology, or new opportunities. Whether you have a
            project idea, need a developer, or just want to say hello. Feel free
            to reach out!
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:ibitokunmoro3@gmail.com"
              className="group flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary-container"
            >
              <FiMail size={20} className="text-primary-container transition-transform group-hover:scale-110" />
              ibitokunmoro3@gmail.com
            </a>
            <div className="group flex items-center gap-3 text-on-surface-variant">
              <FiMapPin size={20} className="text-primary-container transition-transform group-hover:scale-110" />
              Available Remotely
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={150}>
          <TiltCard className="h-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="h-full rounded-2xl border border-outline-variant bg-surface-container p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group">
                  <label className="mb-2 block font-code text-xs text-on-surface-variant transition-colors group-hover:text-primary-container">
                    name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter name"
                    className="w-full rounded border border-outline-variant bg-surface-dim px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary-container focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  />
                </div>
                <div className="group">
                  <label className="mb-2 block font-code text-xs text-on-surface-variant transition-colors group-hover:text-primary-container">
                    email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Enter email"
                    className="w-full rounded border border-outline-variant bg-surface-dim px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary-container focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  />
                </div>
              </div>

              <div className="group mt-4">
                <label className="mb-2 block font-code text-xs text-on-surface-variant transition-colors group-hover:text-primary-container">
                  subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full rounded border border-outline-variant bg-surface-dim px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary-container focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                />
              </div>

              <div className="group mt-4">
                <label className="mb-2 block font-code text-xs text-on-surface-variant transition-colors group-hover:text-primary-container">
                  message_payload
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Enter message..."
                  className="w-full resize-none rounded border border-outline-variant bg-surface-dim px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary-container focus:shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group relative mt-6 w-full overflow-hidden rounded bg-primary-container py-4 font-code text-sm font-bold text-on-primary transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="relative z-10">{isSending ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </form>
          </TiltCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
